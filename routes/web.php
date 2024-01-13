<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [\App\Http\Controllers\Auth\LoginController::class, 'index']);

//route index register
Route::get('/register', [\App\Http\Controllers\Auth\RegisterController::class, 'index']);

//route store register
Route::post('/register', [\App\Http\Controllers\Auth\RegisterController::class, 'store']);

//route index login
Route::get('/login', [\App\Http\Controllers\Auth\LoginController::class, 'index']);

//route store login
Route::post('/login', [\App\Http\Controllers\Auth\LoginController::class, 'store']);

//route logout
Route::post('/logout', [\App\Http\Controllers\Auth\LoginController::class, 'destroy'])->middleware('auth');

//route dashboard
Route::get('/dashboard', \App\Http\Controllers\DashboardController::class)->middleware('auth');

//route anggota
Route::get('/anggota', \App\Http\Controllers\AnggotaController::class)->middleware('auth')->name('anggota.index');

//route anggota
Route::get('/anggota/create', [\App\Http\Controllers\AnggotaController::class, 'create'])->middleware('auth');

//route create
Route::post('/anggota/create', [\App\Http\Controllers\AnggotaController::class, 'store'])->middleware('auth');

//route get anggota by id
Route::get('/anggota/{id}', [\App\Http\Controllers\AnggotaController::class, 'show'])->middleware('auth');

//route update anggota by id
Route::put('/anggota/{id}', [\App\Http\Controllers\AnggotaController::class, 'update'])->middleware('auth');

//route delete view anggota by id
Route::get('/anggota/{id}/delete', [\App\Http\Controllers\AnggotaController::class, 'deleteById'])->middleware('auth');

//route delete anggota by id
Route::delete('/anggota/{id}', [\App\Http\Controllers\AnggotaController::class, 'destroy'])->middleware('auth');
