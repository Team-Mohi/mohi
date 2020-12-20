<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PageUser extends Model
{
    protected $table = 'page_users';
    protected $fillable = [
      'page_users_UserId',
      'page_users_PageId',
      'page_users_Role',
  ];

    public function getOne()
    {
        return $this->hasOne('App\Models\Page', 'page_users_PageId', 'id');
    }
    public function pageUserWithPage()
    {
        return $this->belongsToMany('App\Models\Page','page_users', 'page_users_UserId', 'page_users_PageId')
        ->withPivot('page_users_Role')
        ->wherePivotIn('page_users_Role', ['adminstrators','censor','like']);
    }
}
