<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGroupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('groups', function (Blueprint $table) {
            $table->increments('id');
            $table->string('group_Name');
            $table->string('group_FakeId')->unique();
            $table->string('group_Avatar')->default('uploads/avatar/groups/avatar-default.jpg');
            $table->string('group_Cover')->default('uploads/cover/groups/cover-default.jpg');
            $table->enum('group_Privacy', ['public','private'])->default('public');
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
        Schema::dropIfExists('groups');
    }
}
