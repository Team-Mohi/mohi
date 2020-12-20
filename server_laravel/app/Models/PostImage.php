<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PostImage extends Model
{
    protected $table = 'post_images';
    protected $fillable = [
      'post_images_PostId',
      'post_images_Url',
      'post_images_Type',
    ];
    public function countComment()
    {
        return $this->belongsToMany('App\User', 'comments', 'comment_PostId', 'comment_UserId')
        ->withPivot(['id','comment_Content', 'comment_ParentId', 'comment_Type', 'created_at']);
    }
}
