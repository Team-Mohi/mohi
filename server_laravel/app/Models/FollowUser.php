<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FollowUser extends Model
{
    protected $table = 'follow_users';
    protected $fillable = [
      'id',
      'follow_users_UserId',
      'follow_users_ReceivedUser',
      'follow_users_Status',
    ];
}
