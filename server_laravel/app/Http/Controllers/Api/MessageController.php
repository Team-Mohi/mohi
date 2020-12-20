<?php

namespace App\Http\Controllers\Api;
use App\Models\Message;
use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \Tymon\JWTAuth\Facades\JWTAuth;

class MessageController extends Controller
{

  public function __construct()
  {
      $this->middleware('auth:api', ['except' => ['login']]);
  }

  //danh sách người nhắn tin
  public function listMessages()
  {
    $messages = JWTAuth::user()->messages();
    $messages = $messages->toArray();
    usort ($messages, array($this, 'cmp'));
    return response()->json($messages,200);
  }

  public function cmp($a, $b) {
    return strtotime($b['pivot']['created_at']) - strtotime($a['pivot']['created_at']) ;
    }

  // nội dung 1 tin nhắn
  public function detailMessages($idUser)
  {
    $currentUser = JWTAuth::user()->id;
    $message = Message::where('messages_To', $idUser)
    ->where('messages_From', $currentUser)
    ->orWhere(function ($message) use ($idUser) {

              $currentUser = JWTAuth::user()->id;
              $message->where('messages_To', $currentUser)
                      ->where('messages_From', $idUser);
          })
    ->with('userSend')
    ->with('userReceive')
    ->orderBy('created_at', 'desc')
    ->paginate(20);
    $infoUsers = User::find($idUser);
    return response()->json(['info'=> $infoUsers,'message_detail'=>$message]);
  }
  public function sendMessages(Request $request)
  {
    $idUser = JWTAuth::user()->id;
    if($request['messages_ImageUrl']){
      foreach ($request['post_images_Url'] as $key => $value) {
        $message = new Message;
        $message->messages_From = $idUser;
        $message->messages_To = $request['id'];
        $message->messages_ImageUrl = $value['secure_url'];
        $message->messages_ImageType = $value['resource_type'];
        $message->save();
      }
      if($request['messages_Message']){
        $message = new Message;
        $message->messages_Message = $request['messages_Message'];
        $message->save();
      }
    }else{
      $message = new Message;
      $message->messages_From = $idUser;
      $message->messages_To = $request['id'];
      if($request['messages_Message']){
        $message->messages_Message = $request['messages_Message'];
        $message->save();
      }
    }
    if($message){
      return response()->json(['success'=>'thành công'],200);
    }
      return response()->json(['error'=>'thất bại'],400);
  }

  // //sửa tin nhắn
  // public function editMessages(Request $request)
  // {
  //     $message =  Message::find($request['id']);
  //     $message->
  // }
  //xóa tin nhắn

  //xóa bỏ cuộc trò chuyện
  public function deleteMessages(Request $request)
  {
      $idUser = JWTAuth::user()->id;
      $currentUser = $request['id'];
      $message =  Message::where('messages_To', $idUser)
      ->where('messages_From', $currentUser)
      ->orWhere(function ($message) use ($currentUser) {

                $idUser = JWTAuth::user()->id;
                $message->where('messages_To', $currentUser)
                        ->where('messages_From', $idUser);
            });
      $message->delete();
      if($message){
        return response()->json(['success'=>'thành công'],200);
      }
        return response()->json(['error'=>'thất bại'],400);
  }

  //gỡ tin nhắn
  public function removeMessages(Request $request)
  {
      $message =  Message::find($request['id']);
      $message->messages_RemoveMessage = 'remove';
      $message->save();
      if($message){
        return response()->json(['success'=>'thành công'],200);
      }
        return response()->json(['error'=>'thất bại'],400);
  }
}
