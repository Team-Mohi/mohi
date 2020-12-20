<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePageUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('page_users', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('page_users_UserId')->unsigned();
            $table->integer('page_users_PageId')->unsigned();
            $table->enum('page_users_Role', ['adminstrators','member'])->default('member');
            $table->foreign('page_users_UserId')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('page_users_PageId')->references('id')->on('pages')->onDelete('cascade');
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
        Schema::dropIfExists('page_users');
    }
}
