<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('user_first_name');
            $table->text('user_avatar')->nullable();
            $table->text('user_cover')->nullable();
            $table->string('user_last_name');
            $table->string('user_username')->unique();
            $table->string('email')->nullable()->unique();
            $table->timestamp('user_email_verified_at')->nullable();
            $table->string('password');
            $table->integer('user_phone')->nullable()->unique();
            $table->date('user_birthday');
            $table->enum('user_gender', ['nam','nữ','orther']);
            $table->integer('user_isVery')->default(0);
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}