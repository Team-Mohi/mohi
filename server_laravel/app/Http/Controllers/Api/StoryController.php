<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use \Tymon\JWTAuth\Facades\JWTAuth;
use App\User;
use App\Models\Story;
use App\Http\Controllers\Controller;
use DB;

class StoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    //lấy danh sách tin nhanh
    // public function getStoryHome()
    // {
    //     $listStory = JWTAuth::user()->with('listStory')->get();
    //     $list = array();
    //
    //     //lấy hết user thằng nào có story mới lấy
    //     foreach ($listStory as $key => $value) {
    //       if(!count($value->listStory)){
    //         foreach ($value->listStory as $k => $v) {
    //           unset($listStory[$k]);
    //         }
    //       }else {
    //         array_push($list, $value);
    //       }
    //     }
    //
    //     //lấy tiếp từ list những thằng có story trong hôm nay
    //     foreach ($list as $key => $value) {
    //       foreach ($value->listStory as $k => $v) {
    //         // echo $v->id;exit;
    //         $created = strtotime($v->created_at);
    //         $now = strtotime(now());
    //         // echo now();exit;
    //         $time = $created + 86400  - $now;
    //         if($time < 0){
    //           unset($value->listStory[$k]);
    //         }
    //
    //       }
    //       $value->listStory->toArray();
    //     }
    //     foreach ($list as $key => $value) {
    //       if(!count($value->listStory)){
    //           unset($list[$key]);
    //       }
    //     }
    //     return response()->json($list);
    //
    // }
    public function getStoryHome()
    {
        $idUser = JWTAuth::user()->id;
        $listStory = User::where('id', '!=', $idUser)
        ->with(['listStory'=> function ($listStory) {
         $listStory->orderBy('created_at', 'desc');
        }])
        ->orderBy('created_at','desc')
        ->get();

        foreach ($listStory as $key => $value) {
             if(!count($value->listStory)){
               unset($listStory[$key]);
             }
           }


         // $listStory = (object)$listStory;
         $listStoryMe = User::where('id', $idUser)
         ->with(['listStory'=> function ($listStoryMe) {
          $listStoryMe->orderBy('created_at', 'desc');
         }])
         ->orderBy('created_at','desc')
         ->get();

         foreach ($listStoryMe as $key => $value) {
              if(!count($value->listStory)){
                unset($listStoryMe[$key]);
              }
            }
            $listStoryMe = $listStoryMe->toArray();
            $listStory =  $listStory->toArray();
            usort ($listStory, array($this, 'cmp'));
            foreach ($listStory as $key => $value) {
              array_push($listStoryMe,$value);
            }

          foreach ($listStoryMe as $key => $value) {

              foreach ($value['list_story'] as $k => $v) {
                $created = strtotime($v['created_at']);
                $now = strtotime(now());
                $time = $created + 86400  - $now;
                if($time < 0){
                    unset($listStoryMe[$key]['list_story'][$k]);

                }

              }
            }
            foreach ($listStoryMe as $key => $value) {
              if(!count($value['list_story'])){
                  unset($listStoryMe[$key]);
              }
            }
            return response()->json($listStoryMe);


      }
      public function cmp($a, $b) {
        return strtotime($b['list_story'][0]['created_at']) - strtotime($a['list_story'][0]['created_at']) ;
        }

    }
