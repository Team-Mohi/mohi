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
      'privacy',
      'created_at'
    ];
    public function postsNewFeed()
  {
      return $this->belongsToMany('Post', 'follow_users', 'idUser', 'receivedUser')
      ->withPivot('status')
      ->wherePivotIn('status', ['following','added','specialUser']);
  }

  public function adminPost()
  {
      return $this->belongsTo('App\User', 'idUser', 'id');
  }

  public function actionsPost()
  {
      return $this->belongsToMany('App\User', 'actions', 'idPost', 'idUser')
      ->withPivot(['action','id']);
  }

  public function imagesPost()
  {
      return $this->hasMany('App\Models\PostImage', 'idPost', 'id');
  }

  public function commentPost()
  {
      return $this->belongsToMany('App\User', 'comments', 'idPost', 'idUser')
      ->withPivot('content');
  }

}
