<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\User;
use App\Http\Controllers\MailController;
use Illuminate\Support\Facades\Hash;
use \Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Validator;
use Twilio\Rest\Client;
class RegisterController extends Controller
{
    public function register(Request $request)
    {
        if(is_numeric($request['user_email'])){
             $request['user_phone']= $request['user_email'];
        }else{
            $request['email']= $request['user_email'];
        }

        $rules =  [
        'email' => [ 'unique:users'],
        'user_phone' => [ 'unique:users'],
      ];
        $error = [
        'email.unique' => ' Email đã được đăng kí',
        'user_phone.unique' => 'Số điện thoại đã được đăng kí'
      ];
        $validator = Validator::make($request->all(), $rules, $error);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $veri_code = rand(500000, 900000);
        $phone= null;
        $email= null;
        $username = $request['user_first_name']." ".$request['user_last_name'];
        if(is_numeric($request['user_email'])){
            $phone = $request['user_email'];
            $this->sendMessage('Mohi.vn - Mã xác nhận của bạn là '.$veri_code, '+84'.substr($phone,1));
        }else{
            $email = $request['user_email'];
           MailController::sendRegisterEmail($username, $email, $veri_code);
        }
        $birthday = $request['user_birthday_year']."-".$request['user_birthday_month']."-".$request['user_birthday_date'];
        if ($request['user_sex'] == 'nam') {
            $avatar = 'uploads/avatar/profiles/men.png';
        } elseif ($request['user_sex'] == 'nữ') {
            $avatar = 'uploads/avatar/profiles/women.png';
        } else {
            $avatar = 'uploads/avatar/profiles/men.png';
        }
        $user = new User;
        $user->user_first_name = $request['user_first_name'];
        $user->user_last_name = $request['user_last_name'];
        $user->user_avatar = $avatar;
        $user->user_cover ='uploads/cover/profiles/default-cover.jpg';
        $user->user_username = '1000'.rand('10000000', '99999999');
        $user->email = $email;
        $user->user_phone = $phone;
        $user->user_birthday = $birthday;
        $user->user_gender = $request['user_sex'];
        $user->password = Hash::make($request['user_password']);
        $user->save();
        if($phone){
            $res_email = $phone;
        }else{
            $res_email = $email;
        }
        // lưu 
        return response()->json(['veri_code'=>$veri_code, 'user'=>$user]);
    }

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
            $logAccess = 'email';
        }else{
            $logAccess = 'user_username';
        }

        $credentials = [
        $logAccess => $logValue,
        'password' => $request['user_password'],
        ];
        // echo "<pre>"; print_r($credentials);exit;

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

    private function sendMessage($message, $recipients)
    {
        $account_sid = getenv("TWILIO_SID");
        $auth_token = getenv("TWILIO_AUTH_TOKEN");
        $twilio_number = getenv("TWILIO_NUMBER");
        $client = new Client($account_sid, $auth_token);
        $client->messages->create($recipients, 
                ['from' => $twilio_number, 'body' => $message] );
    }
}