<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    protected $table = 'pages';
    protected $fillable = [
      'page_Name',
      'page_FakeId',
      'page_Description',
      'page_Avatar',
      'page_Cover',
      'page_Phone',
      'page_Email',
      'page_Address',
      'page_Type',
      'created_at',

    ];

    public function adminPage()
    {
        return $this->belongsToMany('App\User', 'page_users', 'page_users_PageId', 'page_users_UserId')
        ->withPivot('page_users_Role')
        ->wherePivotIn('page_users_Role', ['adminstrators']);;
    }

    public function userLikePage()
    {
        return $this->belongsToMany('App\User', 'page_users', 'page_users_PageId', 'page_users_PageId')
        ->withPivot('page_users_Role')
        ->wherePivotIn('page_users_Role', ['like']);
    }

    // public function withPageUser()
    // {
    //     return $this->hasMany('App\Models\page_users', 'page_users_PageId', 'id')
    // }
    public function pageUsersSuggestion()
    {
        return $this->hasOne('App\User', 'id', 'info_user_UserId');
    }

}
