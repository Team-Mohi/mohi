<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Page;
use App\User;
use App\Models\PageUser;
use App\Models\PostImage;
use App\Models\Action;
use App\Models\FollowUser;
use \Tymon\JWTAuth\Facades\JWTAuth;
use DB;

class PostController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }


    //danh sách bài viết ở trang chủ
    public function getPostHome()
    {

        $listPost = array();
        $idUser = JWTAuth::user()->id;
        $listPosts = Post:: where('post_UserId','!=', $idUser)
        ->whereIn('post_Privacy', ['public','friend'])
        ->where(function ($listPosts) {
          // lấy list friend
          $idUser = JWTAuth::user()->id;
          $myListFriends = JWTAuth::user()
          ->listFriendGetPost();
          $lenght = count($myListFriends);
          $listIdFriends = array();
          for ($i = 0; $i < $lenght; $i++) {
              array_push($listIdFriends, $myListFriends[$i]['id']);
          }
          $newIdUser = (string)$idUser;
          $listPosts->whereIn('post_userReceiveId',$listIdFriends);
        })
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

    //share bài viết
    public function sharePost(Request $request)
    {
      $post = Post::find($request['id']);
      $post->post_IdFake = $now.rand('1000000', '9999999');

      $post->post_UserIdShare = $userIdShare;
      $post->save();
      if($post){
        return response()->json(['success'=>'Thành công'],201);
      }
      return response()->json(['error'=>'Không thành công'],201);
    }


    // lấy chi tiết bài viết bài viết
    public function getDetailPost($idPost)
    {
        $detailPost = Post::where('post_IdFake', $idPost)
        ->with('userAdminPost')
        ->with('profileReceivePost')
        ->with('imagesPost')
        ->with('actionsPost')
        ->with('commentPost')
        ->with('tagUsersPost')
        ->first();
        if($detailPost){
          return response()->json($detailPost);
        }
        return response()->json(['error' => $detailPost.' thất bại'], 400);
    }


    //ẩn 1 bài  viết
    public function hideOnePost(Request $request)
    {
        $idUser = JWTAuth::user()->id;
        $post = Post::find($request['id']);
        if($idUser<10){
          $post->post_UserIdHide = '0'.$idUser.',';
        }else {
          $post->post_UserIdHide = $idUser.',';
        }


        $post->save();
        return response()->json(['success'=>'Ẩn bài viết thành công'],201);
    }

    //tắt thông báo bài viết
    public function hideNotifycationPost(Request $request)
    {
        $idUser = JWTAuth::user()->id;
        $post = Post::find($request['id']);
        $getPost = Post::find($request['id']);
        $arr = explode(',',$getPost['post_FollowUserId']);
        $indexOf = array_search($idUser, $arr);
        unset($arr[$indexOf]);
        $newFllowUserId = implode(',',$arr);
        $post->post_FollowUserId = $newFllowUserId;
        $post->save();
        return response()->json(['success'=>'tắt thông báo bài viết thành công'],201);
    }

    //ẩn tất cả bài viết
    public function hideAllPost(Request $request)
    {

        $idUser = JWTAuth::user()->id;
        $idFollowUser = $request['id'];
        $followUser = FollowUser::where('follow_users_UserId',$request['id'])
                      ->where('follow_users_ReceivedUser',$idUser)
                      ->orWhere(function ($followUser) use ($idUser,$idFollowUser) {
                          $followUser->where('follow_users_UserId',$idUser)
                                     ->where('follow_users_ReceivedUser',$idFollowUser);
                      })->first();

          $followUser->follow_users_Status = 'unfollow';
          $followUser->save();
        return response()->json(['success'=>'bỏ theo dõi thành công'],201);
    }
}
