<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    protected $table = 'groups';
    protected $fillable = [
      'group_Name',
      'group_FakeId',
      'group_Avatar',
      'group_Cover',
      'group_Privacy',
    ];
    public function adminGroup()
    {
        return $this->belongsToMany('App\User', 'group_users', 'group_users_GroupId', 'group_users_UserId')
        ->withPivot('group_users_Role')
        ->wherePivotIn('group_users_Role', ['adminstrators']);
    }

    public function userMemberGroup()
    {
        return $this->belongsToMany('App\User', 'group_users', 'group_users_GroupId', 'group_users_GroupId')
        ->withPivot('group_users_Role')
        ->wherePivotIn('group_users_Role', ['member','censor'])
        ->wherePivotIn('group_users_Status', ['accept']);
    }
}
