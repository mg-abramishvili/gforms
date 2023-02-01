<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('front');
});

Route::get('_forms', [App\Http\Controllers\FormController::class, 'index']);
Route::get('_form/{id}', [App\Http\Controllers\FormController::class, 'form']);
Route::post('_forms', [App\Http\Controllers\FormController::class, 'store']);

Route::get('/admin', function () {
    return view('admin');
});

Route::prefix("admin")->group(function() {
    Route::get('{any}', function () {
        return view('admin');
    })->where('any', '.*');
});