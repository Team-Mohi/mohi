<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pages', function (Blueprint $table) {
            $table->increments('id');
            $table->string('page_Name');
            $table->string('page_FakeId')->unique();
            $table->string('page_Description');
            $table->text('page_Avatar')->default('uploads/avatar/pages/avatar-default.jpg');
            $table->string('page_Cover')->default('uploads/cover/pages/cover-default.jpg');
            $table->integer('page_Phone')->nullable();
            $table->string('page_Email')->nullable();
            $table->string('page_Address')->nullable();
            $table->enum('type', ['Doanh nghiệp hoặc Thương Hiệu','Cộng đồng hoặc Người của công chúng'])->default('Doanh nghiệp hoặc Thương Hiệu');
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
        Schema::dropIfExists('pages');
    }
}
