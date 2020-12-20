<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use \Tymon\JWTAuth\Facades\JWTAuth;
use App\Http\Controllers\Controller;
use App\Models\FollowUser;
use App\User;

class FollowUserController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    public function getListFriends()
    {
        $listFriends = JWTAuth::user()->friends();
        return response()->json($listFriends);
    }

    public function getListFriendsOfUser($idFriend)
    {
        $listFriends = User::find($idFriend)->friends();
        return response()->json($listFriends);
    }

    public function getListFollowMe()
    {
        $listFollow= JWTAuth::user()->followMe()->get();
        return response()->json($listFollow);
    }

    public function getListSpecialUser()
    {
        $listSpecial= JWTAuth::user()->specialUsers()->get();
        return response()->json($listSpecial);
    }

    public function sendRequestAddFriend($idReceived)
    {
        $request = new FollowUser;
        $request->idUser = JWTAuth::user()->id;
        $request->receivedUser = $idReceived;
        $request->status = 'following';
        $request->save();
        if ($request) {
            return response()->json(['success' =>'Đã gửi lời mời kết bạn'], 200);
        }
        return response()->json(['error' =>'Đã xảy ra lỗi khi gửi lời mời kết bạn'], 500);
    }

    public function acceptRequestAddFriend($id)
    {
        $accept = FollowUser::find($id)->update(['status' =>'added']);
        if ($accept) {
            return response()->json(['success' =>'Đã chấp nhận lời mời kết bạn'], 200);
        }
        return response()->json(['error' =>'Đã xảy ra lỗi khi chấp nhận lời mời kết bạn'], 500);
    }

    public function addSpecialUser($idReceived)
    {
        $add = FollowUser::where(['idUser' => JWTAuth::user()->id, 'receivedUser' => $idReceived])
        ->update(['status' => 'specialUser']);
        if ($add) {
            return response()->json(['success' =>'Đã thêm'.$idReceived.'vào danh sách bạn thân'], 200);
        }
        return response()->json(['error' =>'Đã xảy ra lỗi '], 500);
    }

    public function listMutualFriends($idFriends)
    {
        // get list friends of user
        $friendListFriends = User::find($idFriends)
        ->friends();
        $length1 = count($friendListFriends);
        //get list friends of me
        $myListFriends = JWTAuth::user()
        ->friends();
        $length2 = count($myListFriends);

        $listMutual = array();
        for ($i=0; $i <  $length2 ; $i++) {
            for ($j=0; $j < $length1; $j++) {
                if ($friendListFriends[$j]['id'] == $myListFriends[$i]['id']) {
                    array_push($listMutual, $friendListFriends[$j]);
                }
            }
        }
        return response()->json($listMutual);
    }
}
