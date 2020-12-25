<?php

namespace App;

class Product extends Model
{
    
    use SoftDeletes;
    
    protected $guarded = [];
}