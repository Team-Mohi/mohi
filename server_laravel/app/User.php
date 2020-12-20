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
        return $this->belongsToMany('App\Models\Page', 'App\Models\PageUser', 'page_users_UserId', 'page_users_PageId')
        ->withPivot('page_users_Role')
        ->wherePivot('page_users_Role', 'adminstrators');
    }

    public function allmypages()
    {
        return $this->belongsToMany('App\Models\Page', 'App\Models\PageUser', 'page_users_UserId', 'page_users_PageId')
        ->withPivot('page_users_Role')
        ->wherePivotIn('page_users_Role', ['adminstrators','censor','like']);
    }

    public function mygroups()
    {
        return $this->belongsToMany('App\Models\Group', 'App\Models\GroupUser', 'group_users_UserId', 'group_users_GroupId')
        ->withPivot('group_users_Role')
        ->wherePivot('group_users_Role', 'adminstrators');
    }

    public function allmygroups()
    {
        return $this->belongsToMany('App\Models\Group', 'App\Models\GroupUser', 'group_users_UserId', 'group_users_GroupId')
        ->withPivot(['group_users_Status', 'group_users_Role'])
        ->wherePivot('group_users_Status', 'accept');
    }

    public function friendOfMine()
    {
        return $this->belongsToMany('App\User', 'follow_users', 'follow_users_UserId', 'follow_users_ReceivedUser')
        ->withPivot('follow_users_Status')
        ->wherePivotIn('follow_users_Status', ['added', 'specialUser']);
    }

    public function friendOf()
    {
        return $this->belongsToMany('App\User', 'follow_users', 'follow_users_ReceivedUser', 'follow_users_UserId')
        ->withPivot('follow_users_Status')
        ->wherePivotIn('follow_users_Status', ['added', 'specialUser']);
    }

    public function friends()
    {
        return $this->friendOfMine->merge($this->friendOf);
    }

    public function noFriendOfMine()
    {
        return $this->belongsToMany('App\User', 'follow_users', 'follow_users_UserId', 'follow_users_ReceivedUser')
        ->withPivot('follow_users_Status')
        ->wherePivotIn('follow_users_Status', ['unfollow','following','added', 'specialUser']);
    }

    public function noFriendOf()
    {
        return $this->belongsToMany('App\User', 'follow_users', 'follow_users_ReceivedUser', 'follow_users_UserId')
        ->withPivot('follow_users_Status')
        ->wherePivotIn('follow_users_Status', ['unfollow','following','added', 'specialUser']);
    }

    public function noFriends()
    {
        return $this->noFriendOfMine->merge($this->noFriendOf);
    }

    public function searchFriendOfMine()
    {
        return $this->belongsToMany('App\User', 'follow_users', 'follow_users_UserId', 'follow_users_ReceivedUser');
    }

    public function searchFriendOf()
    {
        return $this->belongsToMany('App\User', 'follow_users', 'follow_users_ReceivedUser', 'follow_users_UserId');
    }

    public function allFriends()
    {
        return $this->searchFriendOfMine->merge($this->searchFriendOf);
    }
    public function friendHidePost()
    {
        return $this->belongsToMany('App\User', 'follow_users', 'follow_users_UserId', 'follow_users_ReceivedUser')
        ->withPivot('follow_users_Status')
        ->wherePivotIn('follow_users_Status', ['added', 'specialUser']);
    }

    public function meHidePost()
    {
        return $this->belongsToMany('App\User', 'follow_users', 'follow_users_ReceivedUser', 'follow_users_UserId')
        ->withPivot('follow_users_Status')
        ->wherePivotIn('follow_users_Status', ['added', 'specialUser']);
    }

    public function listFriendGetPost()
    {
        return $this->friendHidePost->merge($this->meHidePost);
    }

    public function followMe()
    {
        return $this->belongsToMany('App\User', 'follow_users', 'follow_users_ReceivedUser', 'follow_users_UserId')
        ->withPivot('follow_users_Status')
        ->wherePivot('follow_users_Status', 'following');
    }

    public function meFollow()
    {
        return $this->belongsToMany('App\User', 'follow_users', 'follow_users_UserId', 'follow_users_ReceivedUser')
        ->withPivot('follow_users_Status')
        ->wherePivot('follow_users_Status', 'following');
    }

    public function infoUser()
    {
        return $this->hasOne('App\Models\InfoUser', 'info_user_UserId', 'id');
    }
    public function specialUsers()
    {
        return $this->belongsToMany('App\User', 'follow_users', 'follow_users_UserId', 'follow_users_ReceivedUser')
        ->withPivot('follow_users_Status')
        ->wherePivot('follow_users_Status', 'specialUser');
    }

    public function messageReceivedBy()
    {
      return $this->belongsToMany('App\User', 'messages', 'messages_From', 'messages_To')
      ->withPivot(['messages_Message', 'messages_ReadAt', 'created_at'])->withTimestamps();
    }

    public function messageSendBy()
    {
        return $this->belongsToMany('App\User', 'messages', 'messages_To', 'messages_From')
        ->withPivot(['messages_Message', 'messages_ReadAt', 'created_at'])->withTimestamps();
    }

    public function messages()
    {
        return $this->messageReceivedBy->merge($this->messageSendBy);
    }

    public function listStory()
    {
        return $this->hasMany('App\Models\Story', 'story_UserId','id');
    }

    

}
