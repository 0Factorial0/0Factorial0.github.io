<?php

namespace App\Http\Controllers;

use App\User;
use App\Customer;
use App\Product;

class BookController extends Controller
{
    public function index()
    {
           return view('home');
    }
    
    public function create()
    {
        return view('create');
    }

    public function edit(Book $book)
    {
    }

    public function store($request)
    {
    }

    public function update($request, Book $book)
    {
    }

    public function destroy(Book $book)
    {
    }

    public function show(Book $book)
    {
    }
}