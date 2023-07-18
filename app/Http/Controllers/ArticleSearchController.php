<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use Inertia\Inertia;

class ArticleSearchController extends Controller
{
    public function index(){
        $searchResult = Article::customSearchArticles(request(['search']))->paginate(18);
        $q = request('search');
        return Inertia::render('Search/Index',compact('searchResult','q'));
    }
}
