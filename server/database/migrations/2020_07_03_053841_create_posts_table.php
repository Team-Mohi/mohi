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
            $table->string('idFake');
            $table->integer('idUser')->unsigned()->nullable();
            $table->integer('idPage')->unsigned()->nullable();
            $table->integer('idGroup')->unsigned()->nullable();
            $table->string('content')->nullable();
            $table->enum('privacy', ['public','onlyme','friend']);
            $table->foreign('idUser')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('idPage')->references('id')->on('pages')->onDelete('cascade');
            $table->foreign('idGroup')->references('id')->on('groups')->onDelete('cascade');
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
