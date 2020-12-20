<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\Http\Controllers\MailController;
use App\Http\Controllers\Api\OtpController;
use App\Models\PostImage;
use App\Models\FollowUser;
use App\Models\Post;
use App\Models\Comment;
use App\Models\Activity;
use App\Models\Story;
use App\Models\TagUsers;
use \Tymon\JWTAuth\Facades\JWTAuth;

class ProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    //lấy thông tin trang cá nhân (homtown,current place, work place)
    public function getInfoProfile($idProfile)
    {
      if($idProfile){
        $profile = User::where('user_username',$idProfile)->first();

      }if(!$profile){
        return response()->json(['error'=>'Không tìm thấy thông tin'],400);
      }
      $idProfile = $profile->id;
      $infoUser = User::where('id',$idProfile)->first();
      return response()->json($infoUser);
    }

    public function getFollowProfile($idProfile)
    {
      $idUser = JWTAuth::user()->id;
      if($idProfile){
        $profile = User::where('user_username',$idProfile)->first();

      }if(!$profile){
        return response()->json(['error'=>'Không tìm thấy thông tin'],400);
      }
      $idProfile = $profile->id;
      $followUser = FollowUser::where('follow_users_UserId',$idProfile)
      ->where('follow_users_ReceivedUser',$idUser)
      ->orWhere(function ($followUser) use ($idProfile) {

                $idUser = JWTAuth::user()->id;
                $followUser->where('follow_users_UserId', $idUser)
                        ->where('follow_users_ReceivedUser', $idProfile);
            })
      ->first();
      return response()->json($followUser);
    }

    //danh sách bạn bè
    public function getListFriendProfile($idFake)
    {
        $user = User::where('user_username',$idFake)->first();
        $idProfile = $user->id;
        $listFriends = User::find($idProfile)->friends();
      return response()->json($listFriends);
    }

    //danh sách ảnh
    public function getImageProfile($idFake)
    {
        $user = User::where('user_username',$idFake)->first();
        $idProfile = $user->id;
        $listImage = PostImage::select('post_images.*')
        ->join('posts','posts.id','post_images.post_images_PostId')
        ->where('posts.post_userReceiveId',$idProfile)
        ->orderBy('post_images.created_at', 'desc')
        ->get();
      return response()->json($listImage);

    }

    //sửa thông tin trang cá nhân
    public function updateInfoProfile(Request $request)
    {
      //thông tin liên hệ
      $idUser = JWTAuth::user()->id;
      $user = User::find($idUser);
      if($request['user_homeTown']){
        $user->user_homeTown = $request['user_homeTown'];
      }
      if($request['user_currentPlace']){
        $user->user_currentPlace = $request['user_currentPlace'];
      }
      if($request['user_workPlace']){
        $user->user_workPlace = $request['user_workPlace'];
      }
      if($request['user_studyPlace']){
        $user->user_studyPlace = $request['user_studyPlace'];
      }
      if($request['user_college']){
        $user->user_college = $request['user_college'];
      }
      if($request['user_high_school']){
        $user->user_high_school = $request['user_high_school'];
      }
      if($request['user_website']){
        $user->user_website = $request['user_website'];
      }

      //thông tin người dùng
      if($request['user_first_name']){
        $user->user_first_name = $request['user_first_name'];
      }

      if($request['user_last_name']){
        $user->user_last_name = $request['user_last_name'];
      }
      if($request['user_username']){
        $user->user_username = $request['user_username'];
      }
      if($request['user_nick_name']){
        $user->user_nick_name = $request['user_nick_name'];
      }
      if($request['user_introduce']){
        $user->user_introduce = $request['user_introduce'];
      }

      //email,sđt,ngày sinh,giới tính
      if($request['user_email']){
        $user->user_email = $request['user_email'];
      }
      if($request['user_birthday_year'] && $request['user_birthday_month'] && $request['user_birthday_date']){

        $user->user_birthday = $request['user_birthday_year']."-".$request['user_birthday_month']."-".$request['user_birthday_date'];
      }
      if($request['user_gender']){
        $user->user_gender = $request['user_gender'];
      }
      if($request['user_phone']){
        $user->user_phone = $request['user_phone'];
      }

      //ảnh đại diện, ảnh bìa
      if($request['user_avatar']){
        $user->user_avatar = $request['user_avatar'];
        $user->user_avatar_cropX = $request['user_avatar_cropX'];
        $user->user_avatar_cropY = $request['user_avatar_cropY'];
        $user->user_avatar_cropW = $request['user_avatar_cropW'];
        $user->user_avatar_cropH = $request['user_avatar_cropH'];

        //create ảnh
        $post = new Post;
        $post->post_UserId = $idUser;
        $post->post_userReceiveId = $idUser;
        $post->post_Type = 'avatar';
        $now = strtotime(now());
        $post->post_IdFake = $now.rand('1000000', '9999999');
        $post->save();

        $listPostImage = array();
        $postImage =  new PostImage;
        $postImage->post_images_PostId = $post->id;
        $postImage->post_images_Url = $request['user_avatar'];
        $postImage->post_images_Type = 'image';
        $postImage->save();
        array_push($listPostImage,$postImage);

        $activity = new Activity;
        $activity->activity_UserId = $idUser;
        $activity->activity_PostFakeId = $post->post_IdFake;
        $activity->activity_Action ='update_cover';
        $activity->save();


        $actionsPost = array();
        $commentPost = array();
        $userAdminPost = User::find($post->post_UserId);
        $profileReceivePost = User::find($post->post_userReceiveId);

        $newPost = array();
        $newPost1 = collect($post);
        $newPost1->put('images_post', $listPostImage);
        $newPost1->put('actions_post', $actionsPost);
        $newPost1->put('comment_post', $commentPost);
        $newPost1->put('user_admin_post', $userAdminPost);
        $newPost1->put('profile_receive_post', $profileReceivePost);
        $newPost1->all();
        array_push($newPost,$newPost1);
        $user->save();
        return response()->json(['new_avatar'=>$newPost],201);
      }
      if($request['user_cover']){
        $user->user_cover = $request['user_cover'];
        $post = new Post;
        $post->post_UserId = $idUser;
        $post->post_userReceiveId = $idUser;
        $post->post_Type = 'cover';
        $now = strtotime(now());
        $post->post_IdFake = $now.rand('1000000', '9999999');
        $post->save();

        $listPostImage = array();
        $postImage =  new PostImage;
        $postImage->post_images_PostId = $post->id;
        $postImage->post_images_Url = $request['user_cover'];
        $postImage->post_images_Type = 'image';
        $postImage->save();
        array_push($listPostImage,$postImage);

        $activity = new Activity;
        $activity->activity_UserId = $idUser;
        $activity->activity_PostFakeId = $post->post_IdFake;
        $activity->activity_Action ='update_cover';
        $activity->save();

        $newPost = array();
        $actionsPost = array();
        $commentPost = array();
        $userAdminPost = User::find($post->post_UserId);
        $profileReceivePost = User::find($post->post_userReceiveId);

        $newPost1 = collect($post);
        $newPost1->put('images_post', $listPostImage);
        $newPost1->put('actions_post', $actionsPost);
        $newPost1->put('comment_post', $commentPost);
        $newPost1->put('user_admin_post', $userAdminPost);
        $newPost1->put('profile_receive_post', $profileReceivePost);
        $newPost1->all();
        array_push($newPost,$newPost1);
        $user->save();
        return response()->json(['new_cover'=>$newPost],201);
      }
      $user->save();
      if($user){
          return response()->json(['success'=>'chỉnh sửa thành công'],201);
      }
      return response()->json(['error'=>'chỉnh sửa thất bại'],400);
    }

    //sửa thông tin trang cá nhân
    public function deleteInfoProfile(Request $request)
    {
      //thông tin liên hệ
      $idUser = JWTAuth::user()->id;
      $user = User::find($idUser);
      if($request['user_homeTown']){
        $user->user_homeTown = Null;
      }
      if($request['user_currentPlace']){
        $user->user_currentPlace = Null;
      }
      if($request['user_workPlace']){
        $user->user_workPlace = Null;
      }
      if($request['user_studyPlace']){
        $user->user_studyPlace = Null;
      }
      if($request['user_college']){
        $user->user_college = Null;
      }
      if($request['user_high_school']){
        $user->user_high_school = Null;
      }
      if($request['user_website']){
        $user->user_website = Null;
      }


      if($request['user_nick_name']){
        $user->user_nick_name = Null;
      }
      if($request['user_introduce']){
        $user->user_introduce = Null;
      }

      $user->save();
      if($user){
          return response()->json(['success'=>'xóa thành công'],201);
      }
      return response()->json(['error'=>'xóa thất bại'],400);
    }
    // //chỉnh sửa thông tin liên hệ (email, sđt, ngày sinh)
    // public function updateContactProfile(Request $request)
    // {
    //   $idUser = JWTAuth::user()->id;
    //   $user = User::find($idUser);
    //   if($request['user_first_name']){
    //     $user->user_email = $request['user_first_name'];
    //   }
    //   if($request['user_last_name']){
    //     $user->user_email = $request['user_last_name'];
    //   }
    //   if($request['user_email']){
    //     $user->user_email = $request['user_email'];
    //   }
    //   if($request['user_birthday_year'] && $request['user_birthday_month'] &&$request['user_birthday_date']){
    //
    //     $user->user_birthday = $request['user_birthday_year']."-".$request['user_birthday_month']."-".$request['user_birthday_date'];
    //   }
    //   if($request['user_gender']){
    //     $user->user_gender = $request['user_gender'];
    //   }
    //   if($request['user_phone']){
    //     $user->user_phone = $request['user_phone'];
    //   }
    //   $user->save();
    //   if($user){
    //       return response()->json(['success'=>'chỉnh sửa thành công'],201);
    //   }
    //   return response()->json(['error'=>'chỉnh sửa thất bại'],400);
    //
    // }

    //gửi otp add số điện thoại or email
    public function sendOtpAdd(Request $request)
    {
      $Otp = new OtpController;
      if(is_numeric($request['user_email'])){
          $phone = $request['user_email'];
          $veri_code =  $Otp->sendOtp($request['action'], $request['user_email'], $request['user_email']);
          if($veri_code =='error'){
            $veri_code = $request['user_email']." đã tồn tại trong hệ thống";
            return response()->json(['error'=>$veri_code],400);
          }else {
              return response()->json(['veri_code'=>$veri_code],201);
          }
      }else{
          $username =  JWTAuth::user()->user_last_name;
          $email = $request['user_email'];
          $veri_code = $Otp->sendOtp($request['action'], $request['user_email'], $username);
          if($veri_code =='error'){
            $veri_code = $request['user_email']." đã tồn tại trong hệ thống";
            return response()->json(['error'=>$veri_code],400);
          }else {
              return response()->json(['veri_code'=>$veri_code],201);
          }
      }

    }
    //
    // //update ảnh đại diện hoặc avatar
    // public function updateAvatarProfile(Request $request)
    // {
    //   $idUser = JWTAuth::user()->id;
    //   $user = User::find($idUser);
    //   if($request['user_avatar']){
    //     $user->user_avatar = $request['user_avatar'];
    //   }
    //   if($request['user_cover']){
    //     $user->user_cover = $request['user_cover'];
    //   }
    //   $user->save();
    //   if($user){
    //       return response()->json(['success'=>'chỉnh sửa thành công'],201);
    //   }
    //   return response()->json(['error'=>'chỉnh sửa thất bại'],400);
    // }

    // lấy tất cả bài viết trong trang cá nhân
    public function getPostProfile($idProfile)
    {
        if($idProfile){
          $profile = User::where('user_username',$idProfile)->first();
          $idProfile = $profile->id;
        }
          $postProfile = Post::where('post_userReceiveId', $idProfile)
          ->where('post_userReceiveId','!=', null)
          ->whereIn('post_Privacy',['public','friend'])
          ->where(function ($postProfile) {
            $idUser = JWTAuth::user()->id;
            $newIdUser = (string)$idUser;
            if($idUser>9){
              $postProfile->where('post_UserIdHide','NOT LIKE',$newIdUser)
                        ->where('post_UserIdHide','NOT LIKE','%,'.$newIdUser.',%');
            }else {
              $postProfile->where('post_UserIdHide','NOT LIKE','0'.$newIdUser.',')
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
          return response()->json($postProfile);
    }

    // tạo bài viết trong trang cá nhân
    public function createPostProfile(Request $request)
    {
        $idUser = JWTAuth::user()->id;

        //tạo story
         $newPost = array();
         $listStory = array();
         $newStory = array();

        if($request['placeStory'] == 1){
          if($request['post_images_Url']){
            foreach ($request['post_images_Url'] as $key => $value) {
              $story = new Story;
              $story->story_UserId = $idUser;
              $story->story_Content = $request['post_Content'];
              $story->story_ImageUrl = $value['secure_url'];
              $story->story_Type = $value['resource_type'];
              $story->story_Privacy = $request['story_Privacy'];
              $story->save();

              array_push($listStory,$story);
            }
          }else{
            $story = new Story;
            $story->story_UserId = $idUser;
            $story->story_Content = $request['post_Content'];
            $story->story_Privacy	 = $request['story_Privacy'];
            $story->save();
            array_push($listStory,$story);
          }

        }
        $UserPost = User::find($idUser);

        //tạo bài viết
        if($request['placePost'] == 1){
        $post = new Post;
        $now = strtotime(now());
        $post->post_UserId = $idUser;
        if($request['post_userReceiveId']){
          $post->post_userReceiveId = $request['post_userReceiveId'];
        }else{
          $post->post_userReceiveId = $idUser;
        }
        $post->post_IdFake = $now.rand('1000000', '9999999');
        $post->post_Content = $request['post_Content'];
        $post->post_Privacy = $request['post_Privacy'];
        $post->save();

        //tạo nhật ký hoạt động
        $activity = new Activity;
        $activity->activity_UserId=$idUser;
        $activity->activity_PostFakeId=$post->post_IdFake;
        $activity->activity_Action='push_post';
        $activity->save();

        $listPostImage = array();
        $listPostTag = array();
        $actionsPost = array();
        $commentPost = array();
        $userAdminPost = User::find($post->post_UserId);
        $profileReceivePost = User::find($post->post_userReceiveId);

        if($request['tag_users_UserId']){
          $list_tag = explode(',',$request['tag_users_UserId']);
          foreach ($list_tag as $key => $value) {
            $tagUsers =  new TagUsers;
            $tagUsers->tag_users_PostId = $post->id;
            $tagUsers->tag_users_UserId = $value;
            $tagUsers->save();
            $infoTagUsers = User::find($value);
            array_push($listPostTag, $infoTagUsers);
          }
        }
        if($request['post_images_Url']){
          foreach ($request['post_images_Url'] as $key => $value) {
            $postImage =  new PostImage;
            $postImage->post_images_PostId = $post->id;
            $postImage->post_images_Url =  $value['secure_url'];
            $postImage->post_images_Type = $value['resource_type'];
            $postImage->save();
            array_push($listPostImage, $postImage);
          }
        }
        $newPost1 = collect($post);
        $newPost1->put('images_post', $listPostImage);
        $newPost1->put('actions_post', $actionsPost);
        $newPost1->put('comment_post', $commentPost);
        $newPost1->put('tag_users_post', $listPostTag);
        $newPost1->put('user_admin_post', $userAdminPost);
        $newPost1->put('profile_receive_post', $profileReceivePost);
        $newPost1->all();
        array_push($newPost,$newPost1);
      }
      return response()->json(['newStory'=>$listStory,'admin_post'=>$UserPost,'newPost'=>$newPost]);
    }


    public function updatePostProfile(Request $request)
    {
        $post = Post::find($request['id']);
        $post->post_Content = $request['post_Content'];
        $post->post_Privacy = $request['post_Privacy'];
        $post->save();

        $listPostImage = array();
        $listPostTag = array();
        $actionsPost = array();
        $commentPost = array();

        $userAdminPost = User::find($post->post_UserId);
        $profileReceivePost = User::find($post->post_userReceiveId);

        $postTagsUser =  TagUsers::where('tag_users_PostId',$request['id']);
        $postTagsUser->delete();
        if($request['tag_users_UserId']){
          $list_tag = explode(',',$request['tag_users_UserId']);
          foreach ($list_tag as $key => $value) {
            $tagUsers =  new TagUsers;
            $tagUsers->tag_users_PostId = $post->id;
            $tagUsers->tag_users_UserId = $value;
            $tagUsers->save();
            $infoTagUsers = User::find($value);
            array_push($listPostTag, $infoTagUsers);
          }
        }
        $postImage =  PostImage::where('post_images_PostId',$request['id']);
        $postImage->delete();
        if($request['post_images_Url']){
          foreach ($request['post_images_Url'] as $key => $value) {
            $postImage =  new PostImage;
            $postImage->post_images_PostId = $post->id;
            $postImage->post_images_Url = $value['secure_url'];
            $postImage->post_images_Type = $value['resource_type'];
            $postImage->save();
            array_push($listPostImage, $postImage);
          }
        }
        $newPost = collect($post);
        $newPost->put('images_post', $listPostImage);
        $newPost->put('actions_post', $actionsPost);
        $newPost->put('comment_post', $commentPost);
        $newPost->put('tag_users_post', $listPostTag);
        $newPost->put('user_admin_post', $userAdminPost);
        $newPost->put('profile_receive_post', $profileReceivePost);
        $newPost->all();
        return  response()->json($newPost);

    }

    //xóa bài viết
    public function deletePostProfile(Request $request)
    {
      $post = Post::find($request['id']);
      $post->delete();
      return response()->json(['success'=>'Xóa bài viết thành công'],200);
    }
}
