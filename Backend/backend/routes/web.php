<?php

use Illuminate\Support\Facades\Route;

//Route to the main page - /
Route::get('/', function () {
    return view('welcome');
});

//Route to the checkout page - /checkout
Route::get('/checkout', [CheckoutController::class, 'index']);
//Route to the create page - /create
Route::get('/create',[UserController::class, 'index']);
//Route to the login page - /login
Route::get('/login', [LoginController::class, 'index']);



