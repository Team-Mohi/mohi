<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('actions', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('actions_UserId')->unsigned();
            $table->integer('actions_PostId')->unsigned();
            $table->enum('actions_action', ['like','haha','love','angry','sad','wow']);
            $table->foreign('actions_UserId')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('actions_PostId')->references('id')->on('posts')->onDelete('cascade');
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
        Schema::dropIfExists('actions');
    }
}