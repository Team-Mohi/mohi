<?php

namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;
use App\User;
use App\Models\Post;
use \Tymon\JWTAuth\Facades\JWTAuth;
use App\Http\Controllers\Controller;

class SearchController extends Controller
{
  public function __construct()
  {
      $this->middleware('auth:api', ['except' => ['login']]);
  }

  public function searchUsers($search)
  {
    $infoUsers = User::where('user_last_name','like','%'.$search.'%')
                ->orWhere('user_first_name','like','%'.$search.'%')
                ->orWhere('user_phone','like','%'.$search.'%')
                ->orWhere('user_username','like','%'.$search.'%')
                ->orWhere('user_homeTown','like','%'.$search.'%')
                ->orWhere('user_currentPlace','like','%'.$search.'%')
                ->orWhere('user_workPlace','like','%'.$search.'%')
                ->get();
    
    $idUser = JWTAuth::user()->id;
    $listPosts = Post::whereIn('post_Privacy', ['public','friend'])
    ->where(function ($listPosts) {
      $idUser = JWTAuth::user()->id;
      $newIdUser = (string)$idUser;
      if($idUser>9){
        $listPosts->where('post_UserIdHide','NOT LIKE',$newIdUser)
                  ->where('post_UserIdHide','NOT LIKE','%,'.$newIdUser.',%');
      }else {
        $listPosts->where('post_UserIdHide','NOT LIKE','0'.$newIdUser.',')
                  ->where('post_UserIdHide','NOT LIKE','%,'.$newIdUser.',%');
      }
    })
    ->where('post_Content','like','%'.$search.'%')
    ->with('userAdminPost')
    ->with('profileReceivePost')
    ->with('imagesPost')
    ->with('actionsPost')
    ->with('commentPost')
    ->with('tagUsersPost')
    ->orderBy('created_at', 'desc')
    ->paginate(2);
    return response()->json($listPosts);
  }
}
