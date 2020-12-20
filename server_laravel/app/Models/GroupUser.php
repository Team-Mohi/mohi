<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GroupUser extends Model
{
    protected $table = 'group_users';
    protected $fillable = [
      'group_users_UserId',
      'group_users_GroupId',
      'group_users_role',
      'group_users_Status'
    ];
}
