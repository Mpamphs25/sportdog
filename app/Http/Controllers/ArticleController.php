<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Author;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

use Illuminate\Support\Collection; 


///category/podosfairo/article/ki-omws-ta-hellip-ekane-o-lineker

class ArticleController extends Controller
{
    public function test(){
       
        $article= Article::mostRecent()->getArticles();
    
         foreach($article as $val){
        
           $articleSlug='category/'. $val->category->slug .'/article/'. $val->slug;
           $val->slug =  $articleSlug;
          }
  
        //   foreach($article as $s){
        //     echo  "<br>". var_dump($s) . "<br>";
        //   }
          
       foreach($article as $sl){
         echo  "<br>". var_dump($sl->slug) . "<br>";
       }
    //   $article = json_encode($article);
    //  $article = json_Decode($article);
    //         print_r($article->path);
    //   dd($article->path);
        // return Article::mostRecent()->search('title')->paginate(10);
    }

    public function index(){
        
        
        return Inertia::render('Articles/Index',[
            'articles' => Article::customSearchArticles(request(['search']))->get(),
            'twoArticles' =>  Article::mostRecent()->take(2)->get(),
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
