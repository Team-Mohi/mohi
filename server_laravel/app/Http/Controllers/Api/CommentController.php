<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use \Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\Comment;
use App\Models\Post;
use App\Models\Notification;
use Illuminate\Http\Request;

class CommentController extends Controller
{
  public function __construct()
  {
      $this->middleware('auth:api', ['except' => ['login']]);
  }

  //tạo bình luận bài viết
  public function createComment(Request $request){
    $idUser = JWTAuth::user()->id;
    $comment = new Comment;
    $comment->comment_UserId = $idUser;
    $comment->comment_PostId = $request['comment_PostId'];
    $comment->comment_Content = $request['comment_Content'];
    if($request['comment_Type']=='child'){
      $comment->comment_Type = 'child';
      $comment->comment_ParentId = $request['comment_ParentId'];
    }
    $comment->save();
    $post = Post::where('id',$request['comment_PostId'])->first();
    $listFollowUserId = explode(',',$post['post_FollowUserId']);
    if($idUser != $post['post_UserId']){
       if($post['post_FollowUserId'] !=null){
         foreach ($listFollowUserId as $key => $value) {
           if($value != $idUser){
             $notification = new Notification;
             $notification->notification_SendUserId = $idUser;
             $notification->notification_ReceivedUserId = $value;
             $notification->notification_AdminPostId = $post['post_UserId'];
             $notification->notification_PostIdFake = $post['post_IdFake'];
             $notification->notification_content = 'đã bình luận bài viết của ';
             $notification->notification_Action = 'comment';
             $notification->save();
           }
         }
       }else{
         $notification = new Notification;
         $notification->notification_SendUserId = $idUser;
         $notification->notification_ReceivedUserId = $post['post_UserId'];
         $notification->notification_AdminPostId = $post['post_UserId'];
         $notification->notification_PostIdFake = $post['post_IdFake'];
         $notification->notification_content = 'đã bình luận bài viết của ';
         $notification->notification_Action = 'comment';
         $notification->save();
       }

    }
    if(!in_array($idUser,$listFollowUserId)){
      $post = Post::where('id',$request['comment_PostId'])->first();
      $post->post_FollowUserId = $post['post_FollowUserId'].','.$idUser;
      $post->save();
    }
    return response()->json($comment);
  }

  //sửa bình luận
  public function updateComment(Request $request){
    $comment = Comment::find($request['id']);
    $comment->comment_Content = $request['comment_Content'];
    $comment->save();
    if($comment){
      return response()->json(['success'=>'thành công'],201);
    }
      return response()->json(['error'=>'thất bại'],400);
  }
  
  //xóa bình luận
  public function deleteComment(Request $request){
    $comment = Comment::find($request['id']);
    $comment->delete();
    if($comment){
      return response()->json(['success'=>'thành công'],201);
    }
      return response()->json(['error'=>'thất bại'],400);
  }
}
