<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $table = 'messages';
    protected $fillable = [
      'messages_From',
      'messages_To',
      'messages_Message',
      'messages_ImageType',
      'messages_ImageUrl',
      'created_at',
    ];
    public function userSend()
    {
        return $this->hasOne('App\User', 'id', 'messages_From');
    }
    public function userReceive()
    {
        return $this->hasOne('App\User', 'id', 'messages_To');
    }
}
