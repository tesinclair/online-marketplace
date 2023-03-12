<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\HomeController;

//Route to the main page - /
Route::get('/', [HomeController::class, 'index']);

//Route to the checkout page - /checkout
Route::get('/checkout', [CheckoutController::class, 'index']);
//Route to the create page - /create and login page -/login as both use the user controller
Route::controller(UserController::class)->group(function() {
    Route::get('/create', 'create');
    Route::get('/login', 'login');
});



