<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use App\Models\Author;
use Inertia\Inertia;


class AuthorController extends Controller
{
    public function index(Author $author)
    {
     
        return Inertia::render('Authors/Index',[
            'articles' => Article::whereBelongsTo($author)->paginate(15),
            'twoArticles' => Article::whereBelongsTo($author)->take(2)->get(),
        ]);
    }
}
