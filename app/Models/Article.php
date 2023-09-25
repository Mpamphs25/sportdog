<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Article extends Model
{
    use HasFactory;

   
   protected $with = ['category','author'];

    public function category()
    {
        
        return $this->belongsTo(Category::class);
    }

    public function author()
    {
        //change
        return $this->belongsTo(Author::class);
    }

    public function text():Attribute
    {
        return Attribute::make( 
            get:fn(string $value) => html_entity_decode(strip_tags($value))
        );
    }


    
    public function title():Attribute
    {
        return Attribute::make(
            
            get:fn(string $value) => html_entity_decode(strip_tags($value))
        );
    }
    
    public function description():Attribute
    {
        return Attribute::make(
            get:fn(string $value) => html_entity_decode(strip_tags($value))
        );
    }

    public function scopeMostRecent($query)
    {
        return $query->orderByDesc('timestamp');
    }

    
    public function scopeCustomSearchArticles($query, array $filters)
    {
     
        $query->when($filters['search'] ?? false, fn($query,$search) => 
            $query->where('title','like', '%'. $search. '%')
            ->orWhere('text','like', '%'. $search. '%')
            ->orWhereHas('author', fn($query)=>
            $query->where('title', 'like',  '%' .$search. '%'))
        );      
    }

    public function scopeGetArticles($query){
        return $query->select(
            // 'id', 'date','slug','title','description','text','category_id','author_id'
            'id', 'date','slug','title','category_id','author_id'
        )
        ->with(['category','author'])->limit(20)->get();
        // ->paginate(20);
    }
}


