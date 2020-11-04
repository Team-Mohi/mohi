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
Route::post('very-regiser', 'Api\RegisterController@veriRegister');
Route::get('/{idUser}/get-user-profile', 'Api\ProfileController@getUserProfile');
Route::get('/{idPage}/get-one-page', 'Api\PageController@getOnePage');
Route::get('/{idGroup}/get-one-group', 'Api\GroupController@getOneGroup');

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
    Route::get('/{id}/my-pages', 'Api\PageController@getMyPages');
    Route::get('/{id}/all-mypages', 'Api\PageController@getAllMyPages');

    // groups
    Route::get('/{id}/my-groups', 'Api\GroupController@getMyGroups');
    Route::get('/{id}/all-groups', 'Api\GroupController@getAllMyGroups');

    //postsNewFeed
    Route::get('/posts-new-feed', 'Api\PostController@getPostsNewFeed');
    Route::get('/posts-profile/{idUser}', 'Api\PostController@getAllPostsProfile');
    Route::get('/one-post/{idfake}/{username}', 'Api\PostController@getOnePost');
    Route::post('/send-action-post/{idPost}', 'Api\PostController@sendActionPost');
    Route::get('/get-action-me/{idPost}', 'Api\ActionController@getActionMe');
});