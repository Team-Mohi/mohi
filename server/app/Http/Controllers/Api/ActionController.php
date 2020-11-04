<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use \Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\Action;
use App\Http\Controllers\Controller;

class ActionController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function getActionMe($idPost)
    {
        $actionMe = Action::where(['idUser'=> JWTAuth::user()->id, 'idPost' => $idPost])->first();
        return response()->json($actionMe, 200);
    }
}
