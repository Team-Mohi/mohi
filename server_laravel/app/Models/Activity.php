<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    protected $table = 'activity';
    protected $fillable = [
      'activity_UserId',
      'activity_Action',
      'activity_PostFakeId',
      'activity_ReceiveUserId',
    ];
    public function receiveActivity()
    {
        return $this->hasOne('App\User', 'id', 'activity_ReceiveUserId');
    }
}
