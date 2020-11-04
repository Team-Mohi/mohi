<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use \Tymon\JWTAuth\Facades\JWTAuth;

class ProfileController extends Controller
{
    public function getUserProfile($idUser)
    {
        $profile = User::find($idUser);
        return response()->json($profile);
    }
}
