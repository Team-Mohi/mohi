<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\Http\Controllers\Api\OtpController;
use Illuminate\Support\Facades\Hash;
use \Tymon\JWTAuth\Facades\JWTAuth;

class ForgotPasswordController extends Controller
{


    //quên mật khẩu
    public function forgotPassword(Request $request)
    {
        $is_valid = User::where(['user_email' => $request['user_email']])->orWhere(['user_phone' => $request['user_email']])->first();
        if(!$is_valid){
            return response()->json(['error'=>'Tài khoản không tồn tại'], 401);
        }
        $Otp = new OtpController;
        $username = $is_valid['user_first_name']. " ". $is_valid['user_last_name'];
        if(is_numeric($request['user_email'])){
            $phone = $request['user_email'];
            $veri_code =  $Otp->sendOtp($request['action'], $phone, $username);
        }else{
            $email = $request['user_email'];
            $veri_code = $Otp->sendOtp($request['action'], $email, $username);
        }
        return response()->json(['veriCode'=>$veri_code, 'idUser'=>$is_valid->id,'user_email' => $request['user_email'], 'user_name' => $username,'user_avatar'=>$is_valid['user_avatar']]);
    }

    //đổi mật khẩu
    public function changePassword(Request $request)
    {
        $user = User::where('user_email',$request['user_email'])
        ->orWhere('user_username',$request['user_email'])
        ->orWhere('user_phone',$request['user_email'])->first();
        $user->password = Hash::make($request['user_password']);
        $user->save();
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
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        return $this->respondWithToken($token);
    }

    protected function respondWithToken($token)
    {
        return response()->json([
          'access_token' => $token,
          'info' => JWTAuth::user(),
          'token_type' => 'bearer',
          'expires_in' => JWTAuth::factory()->getTTL() * 60
      ]);
    }
}
