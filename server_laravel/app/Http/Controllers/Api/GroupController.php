<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\Models\Group;
use App\Models\Post;
use App\Models\GroupUser;
use App\Models\PostImage;
use App\Models\TagUsers;
use Avatar;
use Str;
use \Tymon\JWTAuth\Facades\JWTAuth;
class GroupController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    // lấy tất cả các nhóm đã tạo
    public function getMyGroups()
    {
        $idUser = JWTAuth::user()->id;
        $groups = User::find($idUser)->mygroups()->where('group_users_Status',1)->get();
        if ($groups) {
            return response()->json($groups);
        }
    }
    // lấy tất cả các nhóm đã tham gia
    public function getAllMyGroups()
      {
        $idUser = JWTAuth::user()->id;
        $groups = User::find($idUser)->allmygroups()->where('group_users_Status',1)->paginate(5);
        if ($groups) {
            return response()->json($groups);
        }
    }
    public function createGroup(Request $request)
    {
        //insert bảng group
        if(empty($request['group_Avatar'])) {
          $avatar =  Avatar::create(strtoupper($request['group_Name']))
           ->setDimension(200)
           ->setFontSize(80)
           ->setShape('square')
           ->toBase64();
         }else {
          $avatar = $request['group_Avatar'];
         }
         if(empty($request['group_Cover'])){
           $cover = "https://res.cloudinary.com/mohi-vn/image/upload/v1604918647/page/cover/cover_default_xuy0jc.jpg";
         }else{
           $cover = $request['group_Cover'];
         }
        $now = strtotime(now());
        $group = new Group;
        $name_slug = Str::slug($request['group_Name']);
        $group->group_Name = $request['group_Name'];
        $group->group_Description = $request['group_Description'];
        $group->group_Avatar = $avatar;
        $group->group_Cover = $cover;
        $group->group_FakeId = $name_slug."-".$now;
        $group->group_Privacy = $request['group_Privacy'];
        $group->save();
        //insert bảng group_user
        $groupUser = new GroupUser;
        $groupUser->group_users_UserId = JWTAuth::user()->id;
        $groupUser->group_users_GroupId	 = $group->id;
        $groupUser->group_users_Role = 'adminstrators';
        $groupUser->group_users_Status = 1;
        $groupUser->save();
        return response()->json(['group'=>$group,'groupUser'=>$groupUser]);
    }
    public function updateGroup(Request $request)
    {
      $group = Group::find($request['id']);
      $group->group_Name = $request['group_Name'];
      $group->group_Description = $request['group_Description'];
      $group->group_Avatar = $request['group_Avatar'];
      $group->group_Cover = $request['group_Cover'];
      $group->group_Privacy = $request['group_Privacy'];
      $group->save();
      return response()->json(['group'=>$group]);
    }
    public function addUserGroup(Request $request)
    {
      if($request['action']=='add'){
        $groupUser = new  GroupUser;
        $groupUser->group_users_UserId = $request['group_users_UserId'];
        $groupUser->group_users_GroupId = $request['group_users_GroupId'];
        $group_users_Status = 'wait';
      }elseif($request['action']=='accept') {
          $groupUser = GroupUser::where('group_users_GroupId',$request['group_users_GroupId'])->where('group_users_UserId',$request['group_users_UserId'])->first();
          $group_users_Status = 'accept';
      }elseif($request['action']=='refuse') {
          $groupUser = GroupUser::where('group_users_GroupId',$request['group_users_GroupId'])->where('group_users_UserId',$request['group_users_UserId'])->first();
          $group_users_Status = 'refuse';
      }
      $groupUser->group_users_Role = 'member';
      $groupUser->group_users_Status = $group_users_Status;
      $groupUser->save();
      return response()->json(['groupUser'=>$groupUser]);
    }
    public function deleteGroup(Request $request)
    {
      $group = Group::find($request['id']);
      $group->delete();
      return response()->json(['notifycation'=>'1']);
    }
    //lấy thông tin trang
    public function getOneGroup($idGroup)
    {
        $oneGroup = Group::where('group_FakeId', $idGroup)
        ->with('adminGroup')
        ->with('userMemberGroup')->first();
        if($oneGroup==''){
          return response()->json(['error'=>'Không tìm thấy nhóm']);
        }
        return response()->json($oneGroup);
    }

    // lấy bài viết trong nhóm
    public function getPostGroup($idGroup)
    {
        $postGroup = Post::where('post_GroupId', $idGroup)
        ->with('userAdminPost')
        ->with('groupAdminPost')
        ->with('imagesPost')
        ->with('actionsPost')
        ->with('commentPost')
        ->with('tagUsersPost')
        ->orderBy('created_at', 'desc')
        ->paginate(2);
        return response()->json($postGroup);
    }


    // tạo bài viết group
    public function createPostGroup(Request $request)
    {
        $post = new Post;
        $now = strtotime(now());
        $post->post_UserId = JWTAuth::user()->id;
        $post->post_GroupId = $request['post_GroupId'];
        $post->post_IdFake = $now.rand('100000', '999999');
        $post->post_Content = $request['post_Content'];
        $post->post_Privacy = $request['post_Privacy'];
        $post->save();

        $listPostImage = array();
        $listPostTag = array();
        $actionsPost = array();
        $commentPost = array();
        $userAdminPost = User::find($post->post_UserId);
        $groupAdminPost = Group::find($post->post_GroupId);

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
          $list_image = explode(',',$request['post_images_Url']);
          foreach ($list_image as $key => $value) {
            $postImage =  new PostImage;
            if($request['post_images_Type']=='post'){
              $post_images_Type = 'post';
            }elseif($request['post_images_Type']=='avatar') {
              $post_images_Type = 'avatar';
            }
            elseif($request['post_images_Type']=='cover') {
              $post_images_Type = 'cover';
            }
            elseif($request['post_images_Type']=='video') {
              $post_images_Type = 'video';
            }
            $postImage->post_images_PostId = $post->id;
            $postImage->post_images_Url = $value;
            $postImage->post_images_Type = $post_images_Type;
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
        $newPost->put('group_admin_post', $groupAdminPost);
        $newPost->all();
        return  response()->json($newPost);
    }
    // sửa bài viết trong nhóm
    public function updatePostGroup(Request $request)
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
        $groupAdminPost = Group::find($post->post_GroupId);

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

          $list_image = explode(',',$request['post_images_Url']);
          foreach ($list_image as $key => $value) {


            $postImage =  new PostImage;
            if($request['post_images_Type']=='post'){
              $post_images_Type = 'post';
            }elseif($request['post_images_Type']=='avatar') {
              $post_images_Type = 'avatar';
            }
            elseif($request['post_images_Type']=='avatar') {
              $post_images_Type = 'cover';
            }
            elseif($request['post_images_Type']=='video') {
              $post_images_Type = 'video';
            }
            $postImage->post_images_PostId = $post->id;
            $postImage->post_images_Url = $value;
            $postImage->post_images_Type = $post_images_Type;
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
        $newPost->put('group_admin_post', $groupAdminPost);
        $newPost->all();
        return  response()->json($newPost);

    }

    //xóa bài viết
    public function deletePostGroup(Request $request)
    {
      $post = Post::find($request['id']);
      $post->delete();
      return response()->json(['notifycation'=>'Xóa bài viết thành công']);
    }
}
