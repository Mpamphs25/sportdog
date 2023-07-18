<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\ArticleSearchController;
use App\Models\Article;
use App\Models\Author;
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
Route::get('/test',[ArticleController::class,'test']); 



 Route::get('category/{category:slug}',[CategoryController::class,'index'])->name('categories.index');
 Route::get('author/{author:slug}',[AuthorController::class,'index'])->name('authors.index');
 Route::get('/search',[ArticleSearchController::class,'index'])->name('search.index');