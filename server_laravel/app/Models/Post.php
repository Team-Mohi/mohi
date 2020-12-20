<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table = 'posts';
    protected $fillable = [
      'post_IdFake',
      'post_UserId',
      'post_PageId',
      'post_GroupId',
      'post_Content',
      'post_Privacy',
      'post_UserIdHide',
      'created_at'
    ];


    public function postsNewFeed()
  {
      return $this->belongsToMany('Post', 'follow_users', 'idUser', 'receivedUser')
      ->withPivot('status')
      ->wherePivotIn('status', ['following','added','specialUser']);
  }

  public function userAdminPost()
  {
      return $this->hasOne('App\User', 'id', 'post_UserId');
  }


  public function pageAdminPost()
  {
      return $this->hasOne('App\Models\Page', 'id', 'post_PageId');
  }
  public function groupAdminPost()
  {
      return $this->hasOne('App\Models\Group', 'id', 'post_GroupId');
  }
  public function profileReceivePost()
  {
      return $this->hasOne('App\User', 'id', 'post_userReceiveId');
  }

  public function actionsPost()
  {
      return $this->belongsToMany('App\User', 'actions', 'actions_PostId', 'actions_UserId')
      ->withPivot(['actions_action']);
  }

  public function commentPost()
  {
      return $this->belongsToMany('App\User', 'comments', 'comment_PostId', 'comment_UserId')
      ->withPivot(['id','comment_Content', 'comment_ParentId', 'comment_Type', 'created_at']);
  }
  public function tagUsersPost()
  {
      return $this->belongsToMany('App\User', 'tag_users', 'tag_users_PostId', 'tag_users_UserId');
  }
  public function imagesPost()
  {
    return $this->hasMany('App\Models\PostImage', 'post_images_PostId', 'id');
  }



}
