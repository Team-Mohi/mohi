<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TagUsers extends Model
{
    protected $table = 'tag_users';
    protected $fillable = [
      'tag_users_PostId',
      'tag_users_UserId',

    ];
}
