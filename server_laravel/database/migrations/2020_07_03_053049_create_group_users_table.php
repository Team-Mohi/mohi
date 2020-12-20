<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGroupUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('group_users', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('group_users_UserId')->unsigned();
            $table->integer('group_users_GroupId')->unsigned();
            $table->enum('group_users_role', ['administrators','member','censor'])->default('member');
            $table->foreign('group_users_UserId')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('group_users_GroupId')->references('id')->on('groups')->onDelete('cascade');
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
        Schema::dropIfExists('group_users');
    }
}
