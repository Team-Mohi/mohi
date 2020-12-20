<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Story extends Model
{
    protected $table = 'story';
    protected $fillable = [
      'story_UserId',
      'story_Content',
      'story_ImageUrl',
      'story_ReadAt',
    ];

}
