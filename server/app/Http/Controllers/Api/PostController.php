<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Action;
use App\Models\FollowUser;
use \Tymon\JWTAuth\Facades\JWTAuth;

class PostController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    public function getAllPostsProfile($idUser)
    {
        $listPosts = Post::where(['idUser' => $idUser])->get();
        return response()->json($listPosts);
    }

    public function getOnePost($idFake, $idUser)
    {
        $post = Post::where(['idUser' => $idUser,'idFake' => $idFake])->first();
        return response()->json($post);
    }

    public function getPostsNewFeed()
    {
        $myListFriends = JWTAuth::user()
        ->friends();

        $lenght = count($myListFriends);
        $listIdFriends = array();
        for ($i = 0; $i < $lenght; $i++) {
            array_push($listIdFriends, $myListFriends[$i]['id']);
        }
        $listPosts = Post::with('adminPost')
        ->with('imagesPost')
        ->with('actionsPost')
        ->with('commentPost')
        ->whereIn('idUser', $listIdFriends)
        ->whereIn('privacy', ['public','friend'])
        ->orderBy('created_at', 'desc')
        ->paginate(2);
        return response()->json($listPosts);
    }

    public function sendActionPost(Request $request, $idPost)
    {
        $action = $request->get('action');
        $actions = Action::firstOrCreate(
            ['idPost' => $idPost, 'idUser' => JWTAuth::user()->id]
        );
        $actions->action = $action;
        $actions->save();
        if ($actions) {
            return response()->json(['success' => $action.' thành công'], 200);
        }
        return response()->json(['error' => $action.' thất bại'], 400);
    }
}
