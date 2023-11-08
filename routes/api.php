<?php

use App\Http\Controllers\Api\GetChapter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
  return $request->user();
});

Route::get("/chapter/{id}", [GetChapter::class, 'show'])->name('show');
Route::get("/choice/{id}", [GetChapter::class, 'getChoice'])->name('getChoice');
Route::get("/image/{id}", [GetChapter::class, 'getImage'])->name('getImage');
