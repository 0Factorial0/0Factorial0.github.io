<?php

use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});
Route::get('/login', function () {
    return view('login');
});

Route::get('/register', function () {
    return view('register');
});

Route::group(['prefix' => 'books/'], function () {
    Route::get('/', 'BookController@index')->name('home');

    Route::get('create', 'BookController@create')->name('books.create');
    Route::get('show', 'BookController@show')->name('books.show');
    Route::get('{book}/edit', 'BookController@edit')->name('books.edit');
    
    Route::post('/', 'BookController@store')->name('books.store');
    Route::put('{book}', 'BookController@update')->name('books.update');

    Route::delete('{book}', 'BookController@destroy')->middleware('auth')->name('books.destroy');
});
Route::get('/home', function () {
    return redirect('/');
});

Route::get('/', 'HomeController@index')->name('home');
Auth::routes();