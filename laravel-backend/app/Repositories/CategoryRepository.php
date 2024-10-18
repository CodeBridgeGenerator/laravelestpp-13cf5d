<?php

namespace App\Repositories;

use App\Interfaces\CategoryRepositoryInterface;
use App\Models\Category;
use App\Http\Resources\CategoryResource;

class CategoryRepository implements CategoryRepositoryInterface 
{
    public function getAllCategorys() 
    {
        $categories = Category::all();
        return CategoryResource::collection($categories);
    }

    public function getCategoryById($CategoryId) 
    {
        $categories = Category::findOrFail($CategoryId);
        return CategoryResource::collection($categories);
    }

    public function deleteCategory($CategoryId) 
    {
        Category::destroy($CategoryId);
    }

    public function createCategory(array $CategoryDetails) 
    {
        return Category::create($CategoryDetails);
    }

    public function updateCategory($CategoryId, array $newDetails) 
    {
        $users = Category::whereId($CategoryId)->update($newDetails);
        return CategoryResource::collection($categories);
    }

}