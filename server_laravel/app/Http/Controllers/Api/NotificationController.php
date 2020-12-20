<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use \Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\Notification;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
  public function __construct()
  {
      $this->middleware('auth:api', ['except' => ['login']]);
  }

  //danh sách thông báo
  public function notifications()
  {
    $idUser = JWTAuth::user()->id;
    $notifications = Notification::where('notification_ReceivedUserId',$idUser)
    ->with('notificationsSend')
    ->with('notificationsAdminPost')
    ->orderBy('created_at', 'desc')
    ->get();
    return response()->json($notifications);
  }

  //xóa thông báo
  public function deleteNotifications(Request $request)
  {
    $idUser = JWTAuth::user()->id;
    $notifications = Notification::find($request['id']);
    $notifications->delete();
    if($notifications){
      return response()->json(['success'=>'thành công'],200);
    }
    return response()->json(['error'=>'thất bại'],401);

  }

}
