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
}
