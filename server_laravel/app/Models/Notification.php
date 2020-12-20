<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    protected $table = 'notifications';
    protected $fillable = [
    'notification_SendUserId',
    'notification_ReceivedUserId',
    'notification_AdminPostId',
    'notification_Content',
    'notification_PostIdFake',
    'notification_Action',
    'notification_IsRead'
    ];

    public function notificationsSend()
    {
        return $this->hasOne('App\User', 'id', 'notification_SendUserId');
    }
    public function notificationsAdminPost()
    {
        return $this->hasOne('App\User', 'id', 'notification_AdminPostId');
    }
}
