<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
        'firstname' => 'Nguyễn Văn',
        'lastname' => 'Phước',
        'username' => 'nguyenvanphuoc.vn',
        'email' => 'phuocnv106@gmail.com',
        'password' => bcrypt('hehe'),
        'phone'=>'0365610561',
        'birthday'=> date('d:m:y'),
        'gender' => 'Nam'
      ]);
    }
}
