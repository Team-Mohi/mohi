<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InfoUser extends Model
{
    protected $table = 'info_users';
    protected $fillable = [
      'idUser',
      'homeTown',
      'address',
      'workplace',
    ];
}
