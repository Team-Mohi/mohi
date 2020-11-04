<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GroupUser extends Model
{
    protected $table = 'group_users';
    protected $fillable = [
      'idUser',
      'idGroup',
      'role',
    ];
}
