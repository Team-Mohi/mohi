<?php
namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\User;
use App\Models\PageUser;
use App\Models\Page;
use App\Models\Post;
use App\Models\PostImage;
use App\Models\TagUsers;
use App\Http\Controllers\Controller;
use \Tymon\JWTAuth\Facades\JWTAuth;
use Str;
use Avatar;
class PageController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    public function getOnePage($idPage)
    {

        $onePage = Page::where('page_FakeId',$idPage)
        ->with('adminPage')
        ->with('userLikePage')
        ->first();
        if($onePage==''){
          return response()->json(['error'=>'Không tìm thấy trang']);
        }
        return response()->json($onePage);
    }

    //lấy bài viết trong trang
    public function getPostPage($idPage)
    {
        $postPage = Post::where('post_PageId', $idPage)
        ->with('userAdminPost')
        ->with('pageAdminPost')
        ->with('imagesPost')
        ->with('actionsPost')
        ->with('commentPost')
        ->with('tagUsersPost')
        ->orderBy('created_at', 'desc')
        ->paginate(2);
        return response()->json($postPage);
    }
    //lấy tất cả các trang đã  tạo
    public function getMyPages()
    {
        $idUser = JWTAuth::user()->id;
        $pages = User::find($idUser)->mypages()->get();
        if ($pages) {
            return response()->json($pages);
        }
    }
    //lấy tất cả các trang đã thích
    public function getAllMyPages()
    {
        $idUser =JWTAuth::user()->id;
        $pages = User::find($idUser)->allmypages()->paginate(5);
        if ($pages) {
            return response()->json($pages);
        }
    }

    //lấy tất cả các trang gợi ý
    public function getPagesSuggestion()
    {
        $idUser =JWTAuth::user()->id;
        //list trang đã thích
        $listIdPages = array();
        $myListPages =  User::find($idUser)->allmypages()->paginate(5);
        $lenght_listPages = count($myListPages);

        for ($i = 0; $i < $lenght_listPages; $i++) {
            array_push($listIdPages, $myListPages[$i]['id']);
        }

        $pagesSuggestion = PageUser::where('page_users_UserId','!=',$idUser)
        ->whereNotIn('page_users_PageId',$listIdPages)
        ->with('pageUserWithPage')
        ->withCount('page_users_UserId')
        ->get();
        return response()->json($pagesSuggestion);
    }

    //tạo page
    public function createPage(Request $request)
    {
        //insert bảng page
        if(empty($request['page_Avatar'])) {
          $avatar =  Avatar::create(strtoupper($request['page_Name']))
           ->setDimension(200)
           ->setFontSize(80)
           ->setShape('square')
           ->toBase64();
         }else {
          $avatar = $request['page_Avatar'];
         }
         // echo $avatar;exit;
         if(empty($request['page_Cover'])){
           $cover = "https://res.cloudinary.com/mohi-vn/image/upload/v1604918647/page/cover/cover_default_xuy0jc.jpg";
         }else{
           $cover = $request['page_Cover'];
         }
        $now = strtotime(now());
        $page = new Page;
        $name_slug = Str::slug($request['page_Name']);
        $page->page_Name = $request['page_Name'];
        $page->page_Description = $request['page_Description'];
        $page->page_Avatar = $avatar;
        $page->page_Cover = $cover;
        $page->page_Phone = $request['page_Phone'];
        $page->page_Email = $request['page_Email'];
        $page->page_FakeId  = $name_slug."-".$now.rand('1000', '9999');
        $page->page_Address = $request['page_Address'];
        $page->page_Type = $request['page_Type'];
        $page->save();
        //insert bảng page_user
        $pageUser = new PageUser;
        $pageUser->page_users_UserId = JWTAuth::user()->id;
        $pageUser->page_users_PageId = $page->id;
        $pageUser->page_users_Role = 'adminstrators';
        $pageUser->save();
        return response()->json(['page'=>$page,'pageUser'=>$pageUser]);
    }

    public function updatePage(Request $request)
    {
      $page = Page::find($request['id']);
      $page->page_Name = $request['page_Name'];
      $page->page_Description = $request['page_Description'];
      $page->page_Avatar = $request['page_Avatar'];
      $page->page_Cover = $request['page_Cover'];
      $page->page_Phone = $request['page_Phone'];
      $page->page_Email = $request['page_Email'];
      $page->page_Address = $request['page_Address'];
      $page->page_Type = $request['page_Type'];
      $page->save();
      return response()->json(['page'=>$page]);
    }

    public function addUserPage(Request $request)
    {
      if($request['action']=='follow'){
        $pageUser = new  PageUser;
        $pageUser->page_users_UserId = JWTAuth::user()->id;;
        $pageUser->page_users_PageId = $request['page_users_PageId'];
        $pageUser->page_users_Role = 'like';
        $pageUser->save();
        return response()->json(['pageUser'=>$pageUser]);
      }elseif($request['action']=='unfollow') {
          $pageUser = PageUser::where('page_users_UserId',JWTAuth::user()->id)->where('page_users_PageId',$request['page_users_PageId'])->first();
          $pageUser->delete();
          return  response()->json(['notification'=>'Bỏ thích trang thành công']);
      }
    }

    public function deletePage(Request $request)
    {
      $page = Page::find($request['id']);
      $page->delete();
      return response()->json(['notifycation'=>'Xóa trang thành công']);
    }

    // tạo bài viết page
    public function createPostPage(Request $request)
    {
        $post = new Post;
        $now = strtotime(now());
        if($request['admin_who']=='admin'){
          $post->post_UserId = JWTAuth::user()->id;
          $userAdminPost = User::find($post->post_UserId);
        }else {
          $userAdminPost = array();
        }
        $post->post_PageId = $request['post_PageId'];
        $post->post_IdFake = $now.rand('10000', '99999');
        $post->post_Content = $request['post_Content'];
        $post->post_Privacy = $request['post_Privacy'];
        $post->save();

        $listPostImage = array();
        $listPostTag = array();
        $actionsPost = array();
        $commentPost = array();

        $pageAdminPost = Page::find($post->post_PageId);

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
        $newPost->put('page_admin_post', $pageAdminPost);
        $newPost->all();
        return  response()->json($newPost);

    }

    // sửa bài viết page
    public function updatePostPage(Request $request)
    {
        $post = Post::find($request['id']);
        $userAdminPost = array();
        $post->post_Content = $request['post_Content'];
        $post->post_Privacy = $request['post_Privacy'];
        $post->save();

        $listPostImage = array();
        $listPostTag = array();
        $actionsPost = array();
        $commentPost = array();

        $pageAdminPost = Page::find($post->post_PageId);

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
        $newPost->put('page_admin_post', $pageAdminPost);
        $newPost->all();
        return  response()->json($newPost);

    }

    //xóa bài viết
    public function deletePostPage(Request $request)
    {
      $post = Post::find($request['id']);
      $post->delete();
      return response()->json(['notifycation'=>'Xóa bài viết thành công']);
    }


}
