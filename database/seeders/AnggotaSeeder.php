<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AnggotaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('anggota')->insert([
            'nama' => 'Vit Firmansyah',
            'email' => 'vit@mail.com',
            'no_hp' => '08517001823',
            'alamat' => 'Jalan Langkat',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('anggota')->insert([
            'nama' => 'Johnson Care',
            'email' => 'care@mail.com',
            'no_hp' => '08517001845',
            'alamat' => 'Jalan Semesta',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
