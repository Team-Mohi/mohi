<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', 'Api\RegisterController@register');
Route::post('forgot-password', 'Api\ForgotPasswordController@forgotPassword');
Route::post('change-password', 'Api\ForgotPasswordController@changePassword');
Route::post('very-regiser', 'Api\RegisterController@veriRegister');
Route::post('resend-otp', 'Api\OtpController@reSendOtp');
Route::get('/{idUser}/get-user-profile', 'Api\ProfileController@getUserProfile');
Route::get('/{idPage}/get-one-page', 'Api\PageController@getOnePage');
Route::get('/{idGroup}/get-one-group', 'Api\GroupController@getOneGroup');
Route::get('/', 'Api\UserController@register');
Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'Api\UserController@login');
    Route::post('logout', 'Api\UserController@logout');
    Route::post('refresh', 'Api\UserController@refresh');
    Route::get('payload', 'Api\UserController@payload');
    Route::get('me', 'Api\UserController@me');

    // friends
    Route::get('/list-friends', 'Api\FollowUserController@getListFriends');
    Route::get('/list-friends-of-user/{idFriend}', 'Api\FollowUserController@getListFriendsOfUser');
    Route::get('/list-follow', 'Api\FollowUserController@getListFollowMe');
    Route::get('/list-special-user', 'Api\FollowUserController@getListSpecialUser');
    Route::get('/send-request-add-friend/{idReceived}', 'Api\FollowUserController@sendRequestAddFriend');
    Route::get('/accept-request-add-friend/{id}', 'Api\FollowUserController@acceptRequestAddFriend');
    Route::get('/add-special-user/{idReceived}', 'Api\FollowUserController@addSpecialUser');
    Route::get('/list-mutual-friends/{idFriend}', 'Api\FollowUserController@listMutualFriends');
    //pages
    Route::get('/my-pages', 'Api\PageController@getMyPages');
    Route::get('/pages-suggestion', 'Api\PageController@getPagesSuggestion');
    Route::get('/all-mypages', 'Api\PageController@getAllMyPages');
    Route::get('/one-pages/{idPage}', 'Api\PageController@getOnePage');
    Route::get('/post-pages/{idPage}', 'Api\PageController@getPostPage');
    Route::post('create-page', 'Api\PageController@createPage');
    Route::post('update-page', 'Api\PageController@updatePage');
    Route::post('like-page', 'Api\PageController@addUserPage');
    Route::post('delete-page', 'Api\PageController@deletePage');
    Route::post('create-post-page', 'Api\PageController@createPostPage');
    Route::post('update-post-page', 'Api\PageController@updatePostPage');
    Route::post('delete-post-page', 'Api\PageController@deletePostPage');

    // groups
    Route::get('/my-groups', 'Api\GroupController@getMyGroups');
    Route::get('/all-groups', 'Api\GroupController@getAllMyGroups');
    Route::post('create-group', 'Api\GroupController@createGroup');
    Route::post('update-group', 'Api\GroupController@updateGroup');
    Route::post('add-user-group', 'Api\GroupController@addUserGroup');
    Route::post('delete-group', 'Api\GroupController@deleteGroup');
    Route::get('/post-group/{idGroup}', 'Api\GroupController@getPostGroup');
    Route::get('/one-group/{idGroup}', 'Api\GroupController@getOneGroup');
    Route::post('create-post-group', 'Api\GroupController@createPostGroup');
    Route::post('update-post-group', 'Api\GroupController@updatePostGroup');
    Route::post('delete-post-group', 'Api\GroupController@deletePostGroup');


    //postsNewFeed
    Route::get('/posts-new-feed', 'Api\PostController@getPostsNewFeed');
    Route::get('/posts-profile/{idUser}', 'Api\PostController@getAllPostsProfile');
    Route::get('/one-post/{idfake}/{username}', 'Api\PostController@getOnePost');
    Route::post('/send-action-post/{idPost}', 'Api\PostController@sendActionPost');

    //profile
    Route::get('/get-info-profile/{idProfile}', 'Api\ProfileController@getInfoProfile');
    Route::get('/list-friend-profile/{idProfile}', 'Api\ProfileController@getListFriendProfile');
    Route::get('/list-image-profile/{idProfile}', 'Api\ProfileController@getImageProfile');
    Route::get('/post-profile/{idProfile}', 'Api\ProfileController@getPostProfile');
    Route::post('create-post-profile', 'Api\ProfileController@createPostProfile');
    Route::post('update-post-profile', 'Api\ProfileController@updatePostProfile');
    Route::post('delete-post-profile', 'Api\ProfileController@deletePostProfile');
    Route::post('update-info-profile', 'Api\ProfileController@updateInfoProfile');
    Route::post('delete-info-profile', 'Api\ProfileController@deleteInfoProfile');
    Route::post('send-otp-add', 'Api\ProfileController@sendOtpAdd');
    Route::get('follow-profile/{idProfile}', 'Api\ProfileController@getFollowProfile');


    //post
    Route::get('get-post-home', 'Api\PostController@getPostHome');
    Route::get('detail-post/{idPost}', 'Api\PostController@getDetailPost');
    Route::post('hide-one-post', 'Api\PostController@hideOnePost');
    Route::post('hide-notifycation-post', 'Api\PostController@hideNotifycationPost');
    Route::post('hide-all-post', 'Api\PostController@hideAllPost');
    Route::post('share-post', 'Api\PostController@sharePost');

    //user
    Route::get('users-suggestion', 'Api\HomeController@usersSuggestion');
    Route::get('users-request', 'Api\HomeController@usersRequest');
    Route::get('my-request-friend', 'Api\HomeController@myRequestFriend');
    Route::get('list-activity', 'Api\HomeController@activityDiary');

    //messages
    Route::get('list-message', 'Api\MessageController@listMessages');
    Route::get('detail-message/{idUser}', 'Api\MessageController@detailMessages');
    Route::post('send-message', 'Api\MessageController@sendMessages');
    Route::post('update-message', 'Api\MessageController@updateMessages');
    Route::post('delete-message', 'Api\MessageController@deleteMessages');
    Route::post('remove-message', 'Api\MessageController@removeMessages');

    //notifications
    Route::get('notification', 'Api\NotificationController@notifications');
    Route::post('delete-notification', 'Api\NotificationController@deleteNotifications');

    //action
    Route::post('create-action', 'Api\ActionController@createAction');

    //comment
    Route::post('create-comment', 'Api\CommentController@createComment');
    Route::post('update-comment', 'Api\CommentController@updateComment');
    Route::post('delete-comment', 'Api\CommentController@deleteComment');

    //story
    Route::get('get-story-home', 'Api\StoryController@getStoryHome');

    //search
    Route::get('search-user/{search}', 'Api\SearchController@searchUsers');

    //User
    Route::post('add-friend', 'Api\UserController@addFriend');
    Route::post('accept-friend', 'Api\UserController@acceptFriend');
    Route::post('refuse-friend', 'Api\UserController@refuseFriend');

});
