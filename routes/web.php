<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MessageController;
use Illuminate\Support\Facades\Auth;



Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/messages',[MessageController::class, 'index']);
