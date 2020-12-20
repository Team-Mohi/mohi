<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\FollowUser;
use App\Models\InfoUser;
use App\Models\Activity;
use App\User;
use Str;

class UserController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','refresh']]);
    }


    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {

        $logValue = $request['user_email'];
        $filterPhone = '/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/';
        if(preg_match($filterPhone, ($request['user_email']))){
            $logAccess = 'user_phone';
            $phoneNumber = preg_replace('/\color{#fff}{[0-9]+?}[0−9]+?/', '', $request['user_email']);
            $phoneNumber = preg_replace('/[^0-9]/', '', $phoneNumber);
            $phoneNumber = ltrim($phoneNumber, '0');
            $logValue = $phoneNumber;
        }elseif(filter_var($logValue, FILTER_VALIDATE_EMAIL)){
            $logAccess = 'user_email';
        }else{
            $logAccess = 'user_username';
        }


        $credentials = [
        $logAccess => $logValue,
        'password' => $request['user_password'],
        ];

        if (! $token = JWTAuth::attempt($credentials)) {
            return response()->json(['error' => 'Tài khoản hoặc mật khẩu không đúng'], 401);
        }

        $checkUserExits = JWTAuth::user();
        //check user đã very hay chưa
        if($checkUserExits && !$checkUserExits->user_isVery){
          return response()->json(['error' => 'Tài khoản chưa được xác minh', 'idUser' => $checkUserExits->id], 301);
        }
        // echo "<pre>"; print_r(); exit;

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(JWTAuth::user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        JWTAuth::invalidate(JWTAuth::getToken());
        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
          'access_token' => $token,
          'token_type' => 'bearer',
          'info' => JWTAuth::user(),
          'expires_in' => JWTAuth::factory()->getTTL() * 60
      ]);
    }

    public function payload()
    {
        return response()->json(auth('api')->payload());
    }

    //gửi lời mời kết bạn
    public function addFriend(Request $request)
    {
        $followUser = new FollowUser;
        $idUser = JWTAuth::user()->id;
        $followUser->follow_users_UserId = $idUser;
        $followUser->follow_users_ReceivedUser = $request['follow_users_ReceivedUser'];
        $followUser->follow_users_Status = 'following';
        $followUser->save();
        $activity = new Activity;
        $activity->activity_UserId = $idUser;
        $activity->activity_Action = 'add_friend';
        $activity->activity_ReceiveUserId = $request['follow_users_ReceivedUser'];
        $activity->save();
        if($followUser){
          return response()->json(['success'=>'thành công'],201);
        }
        return response()->json(['error'=>'thất bại'],401);
    }

    //chấp nhận lời mời kết bạn
    public function acceptFriend(Request $request)
    {
        $idUser = JWTAuth::user()->id;
        $followUser = FollowUser::where('follow_users_UserId',$request['follow_users_UserId'])
                      ->where('follow_users_ReceivedUser',$idUser)->first();
        $followUser->follow_users_Status = 'added';
        $followUser->save();
        $activity = new Activity;
          $activity->activity_UserId = $idUser;
          $activity->activity_ReceiveUserId =$request['follow_users_UserId'];
          $activity->activity_Action = 'received_request_add_friend';
          $activity->save();
        if($followUser){
          return response()->json(['success'=>'thành công'],201);
        }

        return response()->json(['error'=>'thất bại'],401);
    }
    //từ chối lời mời kết bạn
    public function refuseFriend(Request $request)
    {
        $idUser = JWTAuth::user()->id;
        $idFriend = $request['id'];
        if($request['action']=='unfriend'){
          $followUser = FollowUser::where('follow_users_UserId',$idFriend)
          ->where('follow_users_ReceivedUser',$idUser)
          ->orWhere(function ($followUser) use ($idUser,$idFriend) {
                    $idUser = JWTAuth::user()->id;
                    $followUser->where('follow_users_UserId', $idUser)
                            ->where('follow_users_ReceivedUser', $idFriend);
                })
          ->first();
        }elseif($request['action']=='refuseFriend') {
          $followUser = FollowUser::where('follow_users_UserId',$idFriend)
          ->where('follow_users_ReceivedUser',$idUser)->first();
        }elseif ($request['action']=='unRequestFriend') {
          $followUser = FollowUser::where('follow_users_UserId',$idUser)
          ->where('follow_users_ReceivedUser',$idFriend)->first();
        }
        $followUser->delete();
        if($followUser){
          return response()->json(['success'=>'thành công'],201);
        }
        return response()->json(['error'=>'thất bại'],401);
    }

}
