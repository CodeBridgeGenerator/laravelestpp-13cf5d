<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Category;
use App\Interfaces\CategoryRepositoryInterface;
use App\Http\Requests\CreateCategoryRequest;

class CategoryController extends Controller
{
    private CategoryRepositoryInterface $userRepository;

    public function __construct(CategoryRepositoryInterface $userRepository) 
    {
        $this->CategoryRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->CategoryRepository->getAllCategories()
        ]);
    }

    public function store(CreateCategoryRequest $request): JsonResponse 
    {
        $user = Category::create($request->validated());
        return response()->json(['message' => 'Category created successfully']);
    }

}
