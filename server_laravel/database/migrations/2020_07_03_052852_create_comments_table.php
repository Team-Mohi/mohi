<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('comment_UserId')->unsigned();
            $table->integer('comment_PostId')->unsigned();
            $table->text('comment_Content');
            $table->integer('comment_ParentId');
            $table->enum('comment_Type', ['parent', 'child'])->default('parent');
            $table->foreign('comment_UserId')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('comment_PostId')->references('id')->on('posts')->onDelete('cascade');
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
        Schema::dropIfExists('comments');
    }
}
