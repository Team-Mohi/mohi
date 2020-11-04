<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\User;
use App\Models\PageUser;
use App\Models\Page;
use App\Http\Controllers\Controller;

class PageController extends Controller
{
    public function getOnePage($idPage)
    {
        $onePage = Page::find($idPage)->first();
        return response()->json($onePage);
    }

    public function getMyPages($idUser)
    {
        $pages = User::find($idUser)->mypages()->get();
        if ($pages) {
            return response()->json($pages);
        }
    }

    public function getAllMyPages($idUser)
    {
        $pages = User::find($idUser)->allmypages()->get();
        if ($pages) {
            return response()->json($pages);
        }
    }
}
