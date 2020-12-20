<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\Http\Controllers\MailController;
use App\Http\Controllers\Api\OtpController;
use Illuminate\Support\Facades\Hash;
use \Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Validator;
use Avatar;

class RegisterController extends Controller
{
    //đăng ký mới
    public function register(Request $request)
    {
        if(is_numeric($request['user_email'])){
             $request['user_phone']= $request['user_email'];

        }else{
            $request['user_email']= $request['user_email'];
        }

        $rules =  [
        'user_email' => [ 'unique:users'],
        'user_phone' => [ 'unique:users'],
      ];
        $error = [
        'user_email.unique' => 'Email đã được đăng kí',
        'user_phone.unique' => 'Số điện thoại đã được đăng kí'
      ];
        $validator = Validator::make($request->all(), $rules, $error);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $phone= null;
        $email= null;
        $Otp = new OtpController;
        $username = $request['user_first_name']." ".$request['user_last_name'];
        if(is_numeric($request['user_email'])){
            $phone = $request['user_email'];
            $veri_code =  $Otp->sendOtp($request['action'], $phone, $username);
        }else{
            $email = $request['user_email'];
            $veri_code = $Otp->sendOtp($request['action'], $email, $username);
        }
        $birthday = $request['user_birthday_year']."-".$request['user_birthday_month']."-".$request['user_birthday_date'];
        $avatar =  Avatar::create(strtoupper($request['user_last_name']))
         ->setDimension(200)
         ->setFontSize(100)
         ->setShape('square')
         ->toBase64();
        $user = new User;
        $user->user_first_name = $request['user_first_name'];
        $user->user_last_name = $request['user_last_name'];
        $user->user_avatar = $avatar;
        $user->user_cover ='https://res.cloudinary.com/mohi-vn/image/upload/v1605531942/qflh2pajdcthcxgn6vyg.jpg';
        $user->user_username = '1000'.rand('10000000', '99999999');
        $user->user_email = $email;
        $user->user_phone = $phone;
        $user->user_birthday = $birthday;
        $user->user_gender = $request['user_sex'];
        $user->password = Hash::make($request['user_password']);
        $user->save();

        // lưu
        return response()->json(['veriCode'=>$veri_code, 'idUser'=>$user->id, 'email' => $request['user_email'], 'password' => $request['user_password']]);
    }

    //xác nhận mã otp khi đăng ký
    public function veriRegister(Request $request)
    {
        $user = User::find($request['id']);
        $user->user_isVery = 1;
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
