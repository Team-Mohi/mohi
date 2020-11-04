<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\Models\Group;

class GroupController extends Controller
{
    public function getOneGroup($idGroup)
    {
        $oneGroup = Group::find($idGroup)->first();
        return response()->json($oneGroup);
    }

    public function getMyGroup($idUser)
    {
        $groups = User::find($idUser)->mygroups()->get();
        if ($groups) {
            return response()->json($groups);
        }
    }

    public function getAllMyGroup($idUser)
    {
        $groups = User::find($idUser)->allmygroups()->get();
        if ($groups) {
            return response()->json($groups);
        }
    }
}
