<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PageUser extends Model
{
    protected $table = 'page_users';
    protected $fillable = [
      'idUser',
      'idPage',
      'role',
  ];

    public function getOne()
    {
        return $this->hasOne('App\Models\Page', 'idPage', 'id');
    }
}
