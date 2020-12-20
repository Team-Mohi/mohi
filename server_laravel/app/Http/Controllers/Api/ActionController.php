<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use \Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\Action;
use App\Models\Post;
use App\Models\Activity;
use App\Models\Notification;
use App\Http\Controllers\Controller;

class ActionController extends Controller
{
  public function __construct()
  {
      $this->middleware('auth:api', ['except' => ['login']]);
  }

    //tạo action (like,haha,love,....)
    public function createAction(Request $request){
      $idUser = JWTAuth::user()->id;
      $name = JWTAuth::user()->user_first_name." ".JWTAuth::user()->user_last_name;
      Action::updateOrCreate(
        ['actions_UserId'=>$idUser,'actions_PostId'=>$request['actions_PostId']],
        ['actions_action'=>$request['actions_action']]
      );
      $post = Post::where('id',$request['actions_PostId'])->first();

      if($idUser != $post['post_UserId']){
        Notification::updateOrCreate(
          [
            'notification_SendUserId'=>$idUser,
            'notification_ReceivedUserId'=>$post['post_UserId'],
            'notification_AdminPostId'=>$post['post_UserId'],
            'notification_PostIdFake'=>$post['post_IdFake'],
            'notification_Content'=>'đã bày tỏ cảm xúc bài viết của'
          ],
          ['notification_Action'=>$request['actions_action']]
        );
        Activity::updateOrCreate(
          [
            'activity_UserId'=>$idUser,
            'activity_PostFakeId'=>$post['post_IdFake'],
          ],
          ['activity_Action'=>$request['actions_action']]
        );
      }

      return response()->json('Thành công');
    }
}
