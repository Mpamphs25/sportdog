<?php

use App\Http\Controllers\ArticleController;
use App\Models\Category;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
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

Route::get('/', [ArticleController::class,'index'])->name('articles.index');
Route::get('article/{article:slug}',[ArticleController::class,'show'])->name('article.index');
Route::get('/test',function(){
    // dd(Category::find(37)->articles);
    // dd()
});


