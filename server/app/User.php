<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_first_name',
        'user_lastname',
        'user_name',
        'email',
        'user_username',
        'password',
        'user_phone',
        'user_birthday',
        'user_gender',
        'user_avatar',
        'user_cover',
        'user_verifyCode',
        'user_isVerify',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'user_password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'user_email_verified_at' => 'datetime',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    public function mypages()
    {
        return $this->belongsToMany('App\Models\Page', 'page_users', 'idUser', 'idPage')
        ->withPivot('role')
        ->wherePivot('role', 'adminstrators');
    }

    public function allmypages()
    {
        return $this->belongsToMany('App\Models\Page', 'page_users', 'idUser', 'idPage');
    }

    public function mygroups()
    {
        return $this->belongsToMany('App\Models\Group', 'group_users', 'idUser', 'idGroup')
        ->withPivot('role')
        ->wherePivot('role', 'adminstrators');
    }

    public function allmygroups()
    {
        return $this->belongsToMany('App\Models\Group', 'group_users', 'idUser', 'idGroup');
    }

    public function friendOfMine()
    {
        return $this->belongsToMany('App\User', 'follow_users', 'idUser', 'receivedUser')
        ->withPivot('status')
        ->wherePivotIn('status', ['added', 'specialUser']);
    }

    public function friendOf()
    {
        return $this->belongsToMany('App\User', 'follow_users', 'receivedUser', 'idUser')
        ->withPivot('status')
        ->wherePivotIn('status', ['added', 'specialUser']);
    }

    public function friends()
    {
        return $this->friendOfMine->merge($this->friendOf);
    }

    public function followMe()
    {
        return $this->belongsToMany('App\User', 'follow_users', 'receivedUser', 'idUser')
        ->withPivot('status')
        ->wherePivot('status', 'following');
    }

    public function specialUsers()
    {
        return $this->belongsToMany('App\User', 'follow_users', 'idUser', 'receivedUser')
        ->withPivot('status')
        ->wherePivot('status', 'specialUser');
    }
}