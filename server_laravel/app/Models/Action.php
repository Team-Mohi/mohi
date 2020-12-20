<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Action extends Model
{
    protected $table = 'actions';
    protected $fillable = [
      'actions_UserId',
      'actions_PostId',
      'actions_action',
    ];
}
