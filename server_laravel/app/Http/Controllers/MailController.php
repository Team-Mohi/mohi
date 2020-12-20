<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\RegisterEmail;

class MailController extends Controller
{
    public static function sendRegisterEmail($name, $email, $verify_code,$content)
    {
        $data = [
        'name' => $name,
        'code' => $verify_code,
        'email'=>$email,
        'content'=>$content
      ];
        Mail::to($email)->send(new RegisterEmail($data));
    }
}
