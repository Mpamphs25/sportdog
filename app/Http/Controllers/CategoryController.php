<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{

    
    public function index(Category $category){
        
        return Inertia::render('Categories/Index',[
            'articles' => Article::whereBelongsTo($category)->paginate(15),
            'twoArticles' => Article::whereBelongsTo($category)->take(2)->get(),
        ]);
    }
}
