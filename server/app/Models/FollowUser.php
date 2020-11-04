<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FollowUser extends Model
{
    protected $table = 'follow_users';
    protected $fillable = [
      'idUser',
      'receivedUser',
      'status',
    ];
}
