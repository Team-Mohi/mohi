<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Jobs\WellcomeToMohiJob;

class MailController extends Controller
{
    public static function sendRegisterEmail($name, $email, $verify_code)
    {
        $data = [
        'name' => $name,
        'code' => $verify_code
      ];
        dispatch(new WellcomeToMohiJob($email, $data));
    }
}