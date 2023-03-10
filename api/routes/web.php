<?php

use Illuminate\Support\Facades\Route;

use app\Http\Controllers\UserController;

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
//Redirect empty path to /api
Route::redirect("/", "/api");

//load index page
Route::get('/api', function () {
    return view('index');
});


Route::controllers(UserController::class)->group(function(){
    Route::post('/create', 'create');
    Route::get('/login/{id}', 'login');
})