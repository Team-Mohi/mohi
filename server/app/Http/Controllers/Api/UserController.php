<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\FollowUser;
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
            $logAccess = 'email';
        }else{
            $logAccess = 'user_username';
        }

        $credentials = [
        $logAccess => $logValue,
        'password' => $request['user_password'],
        ];

        if (! $token = JWTAuth::attempt($credentials)) {
            return response()->json(['error' => 'Tài khoản hoặc mật khẩu sai'], 401);
        }

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
}
