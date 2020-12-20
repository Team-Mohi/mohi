<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\InfoUser;
use App\Models\Activity;
use App\Models\Post;
use App\User;
use \Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Http\Request;
use Carbon\Carbon;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
     public function __construct()
     {
         $this->middleware('auth:api', ['except' => ['login','refresh']]);
     }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */


    //danh sách bạn bè giới thiệu
    public function usersSuggestion()
    {
      $idUser = JWTAuth::user()->id;
      $homeTown = JWTAuth::user()->user_homeTown;
      $currentPlace = JWTAuth::user()->user_currentPlace;
      $workPlace = JWTAuth::user()->user_workPlace;

      //danh sách bạn bè
      $myListFriends = JWTAuth::user()
      ->noFriends();
      $lenght = count($myListFriends);
      $listIdFriends = array();
      for ($i = 0; $i < $lenght; $i++) {
          array_push($listIdFriends, $myListFriends[$i]['id']);
      }
      if(!$homeTown){
        $listUsersSuggestion = User::where('id','!=', $idUser)
        ->whereNotIn('id',$listIdFriends)
        ->limit(5)
        ->inRandomOrder()
        ->get();
      }else {
        $list = User::where('id','!=', $idUser)->where('user_homeTown', 'like','%'.$homeTown.'%')
        ->whereNotIn('id',$listIdFriends)
        ->where(function ($listUsersSuggestion) {
          $homeTown = JWTAuth::user()->user_homeTown;
          $currentPlace = JWTAuth::user()->user_currentPlace;
          $workPlace = JWTAuth::user()->user_workPlace;
          $listUsersSuggestion->where('user_homeTown','like','%'.$homeTown.'%')
          ->orWhere('user_currentPlace','like','%'.$currentPlace.'%')
          ->orWhere('user_workPlace','like','%'.$workPlace.'%');
        })
        ->get();
        if(!count($list)){
          $listUsersSuggestion = User::where('id','!=', $idUser)
          ->whereNotIn('id',$listIdFriends)
          ->limit(5)
          ->inRandomOrder()
          ->get();
        }else {
          $listUsersSuggestion = $list;
        }
      }

      return response()->json($listUsersSuggestion);
    }


    //danh sách lời mời kết bạn
    public function usersRequest()
    {
      $usersRequest = JWTAuth::user()->followMe()
      ->get();
      return response()->json($usersRequest);
    }

    //danh sách đã gửi lời mời kết bạn
    public function myRequestFriend()
    {
      $usersRequest = JWTAuth::user()->meFollow()
      ->get();
      return response()->json($usersRequest);
    }

    //danh sách đã gửi lời mời kết bạn
    public function activityDiary()
    {
      $idUser = JWTAuth::user()->id;
      $activityDiary = Post::join('activity','activity.activity_PostFakeId','posts.post_IdFake')
                    ->with('userAdminPost')
                    ->with('profileReceivePost')
                    ->with('imagesPost')
                    ->orderBy('activity.created_at', 'desc')
                    ->get();
      $activityUser = Activity::with('receiveActivity')
                    ->orderBy('created_at', 'desc')
                    ->get();
      return response()->json($activityDiary);
    }
}
