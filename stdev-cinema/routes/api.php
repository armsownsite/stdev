<?php

use App\Http\Controllers\RoomController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\SeansController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->group(function () {
//     // Route::apiResource('room', RoomController::class);
//     Route::get('/room', [RoomController::class, 'index']);
//     Route::get('/login', [RoomController::class, 'index']);
// });

Route::get('/room', [RoomController::class, 'index']);
Route::post('/room/store', [RoomController::class, 'store']);
Route::post('/room/find/{id}', [RoomController::class, 'byidController']);
Route::post('/room/update/{id}', [RoomController::class, 'update']);
Route::post('/room/destroy/{id}', [RoomController::class, 'destroy']);

Route::get('/movie', [MovieController::class, 'index']);
Route::post('/movie/store', [MovieController::class, 'store']);
Route::post('/movie/find/{id}', [MovieController::class, 'byidController']);
Route::post('/movie/store/{id}', [MovieController::class, 'seansMovie']);
Route::post('/movie/update/{id}', [MovieController::class, 'update']);
Route::post('/movie/destroy/{id}', [MovieController::class, 'destroy']);

Route::get('/order', [OrderController::class, 'index']);
Route::get('/order/{id}', [OrderController::class, 'seats']);
Route::post('/order/store', [OrderController::class, 'store']);
Route::post('/order/update/{id}', [OrderController::class, 'update']);
Route::post('/order/destroy/{id}', [OrderController::class, 'destroy']);

Route::get('/seans', [SeansController::class, 'index']);
Route::post('/seans/store', [SeansController::class, 'store']);
Route::post('/seans/store/{id}/{mid}', [SeansController::class, 'seansMovie']);
Route::get('/seans/all', [SeansController::class, 'allSeansMovie']);
Route::post('/seans/update/{id}', [SeansController::class, 'update']);
Route::post('/seans/destroy/{id}', [SeansController::class, 'destroy']);
Route::post('/seans/find/{id}', [SeansController::class, 'oneSeansMovie']);

