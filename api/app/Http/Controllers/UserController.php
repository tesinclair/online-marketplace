<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    function login(Request $request, string $credentials){
        return response("NO_DATABASE", 500)
    }
}
