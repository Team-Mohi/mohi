<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('post_IdFake')->unique();
            $table->integer('post_UserId')->unsigned()->nullable();
            $table->integer('post_PageId')->unsigned()->nullable();
            $table->integer('post_GroupId')->unsigned()->nullable();
            $table->string('post_Content')->nullable();
            $table->enum('privacy', ['public','onlyme','friend'])->default('public');
            $table->foreign('post_UserId')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('post_PageId')->references('id')->on('pages')->onDelete('cascade');
            $table->foreign('post_GroupId')->references('id')->on('groups')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
