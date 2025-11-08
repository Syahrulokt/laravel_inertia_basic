<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

Route::get('/', function () {
    return view('app');
});

// posts
Route::resource('/posts', \App\Http\Controllers\PostController::class);

