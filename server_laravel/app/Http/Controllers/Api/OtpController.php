<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\MailController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Twilio\Rest\Client;
use \Tymon\JWTAuth\Facades\JWTAuth;
class OtpController extends Controller
{
    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */

     //gửi lại mã xác nhận otp
     public function reSendOtp(Request $request){
       $username = '';
       switch ($request['action']) {
           case 'forget_password':
               $is_valid = User::where(['user_email' => $request['user_email']])->orWhere(['user_phone' => $request['user_email']])->first();
              if($is_valid){
                  $username = $is_valid['user_first_name']. " ". $is_valid['user_last_name'];
              }
           break;
           case 'addNew':
              $username = JWTAuth::user()->user_last_name;
            break;
          default:
              $username = '';
          break;
       }
       $veriCode = $this->sendOtp($request['action'], $request['user_email'], $username);
       return response()->json(['veriCode' => $veriCode]);

     }

     //gửi mã xác nhận otp
     public function sendOtp($action, $user_email, $username)
    {
         $veri_code = rand(500000, 900000);

         $message ="";
         switch ($action) {
             case 'forget_password':
                 $is_email = User::where(['user_email' => $user_email])->orWhere(['user_phone' => $user_email])->count();
                if(!$is_email){
                    return response()->json(['error' => 'Chưa tồn tại trong hệ thống']);
                }
                $message = "Mã xác nhận lấy lại mật khẩu là:";
                $content = "Đổi mật khẩu";
             break;
            case 'register':
                $message = "Mã xác nhận của bạn là:";
                $content = "Đăng ký tài khoản mới";
            break;
            case 'addNew':
                $is_email = User::where(['user_email' => $user_email])->orWhere(['user_phone' => $user_email])->count();
                 if($is_email){
                    return 'error';
                 }
                if(is_numeric($user_email)){
                    $emailType = 'số điện thoại';
                }else {
                    $emailType = 'email';
                }
                $message = "Mã xác nhận thêm ".$emailType. "của bạn là:";
                $content = "Thêm email vào tài khoản";
            break;
            case 'update':
                $is_email = User::where(['user_email' => $user_email])->orWhere(['user_phone' => $user_email])->count();
                 if($is_email){
                     return 'error';
                 }
                if(is_numeric($user_email)){
                    $emailType = 'số điện thoại';
                }else {
                    $emailType = 'email';
                }
                $message = "Mã xác nhận sửa ".$emailType." của bạn là:";
                $content = "Sửa email trong tài khoản";
            break;
            default:
                $message = "Mã xác nhận của bạn là:";
                $content = "Đăng ký tài khoản mới";
            break;
         }


        if(is_numeric($user_email)){
            $this->sendMessage('Mohi.vn -  '.$message .' '. $veri_code, '+84'.substr($user_email,1));
        }else{
            $email = $user_email;
            MailController::sendRegisterEmail($username, $email, $veri_code,$content);
        }

        return $veri_code;
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
