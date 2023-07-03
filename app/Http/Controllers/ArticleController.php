<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{

    public function index(){
        
        return Inertia::render('Articles/Index',[
            'articles' => Article::limit(50)->get(),
        ]);
    }

    
    public function show(Article $article){
    
        return Inertia::render('Article/Index',[
            'article' => $article
        ]);
    }
}
