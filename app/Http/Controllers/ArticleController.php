<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Author;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;


use Illuminate\Support\Collection; 




class ArticleController extends Controller
{

    public function index(){
      $q = request()->search;
   
       $arti=[];
   
       if($q){
         $arti = Article::where('title' , 'like' , '%'.$q.'%')->get();
         dd( $arti );
       }
       
        return Inertia::render('Articles/Index',[
            'art' => $arti,
            'articles' => Article::limit(50)->get(),
            'twoArticles' => Article::take(2)->get(),
            'skipTwoArticles' => Article::skip(2)->take(2)->get(),
            'skipFourArticles' => Article::skip(5)->take(14)->get(),
            'skipFourteenArticles' => Article::skip(15)->take(2)->get(),
            'skipEighteenArticles' => Article::skip(17)->take(18)->get(),
            
        ]);
    }

  
    
    public function show(Article $article){
    
        return Inertia::render('Article/Index',[
            'article' => $article
        ]);
    }
}
