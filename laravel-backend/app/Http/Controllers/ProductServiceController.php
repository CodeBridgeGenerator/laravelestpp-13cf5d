<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\ProductService;
use App\Interfaces\ProductServiceRepositoryInterface;
use App\Http\Requests\CreateProductServiceRequest;

class ProductServiceController extends Controller
{
    private ProductServiceRepositoryInterface $userRepository;

    public function __construct(ProductServiceRepositoryInterface $userRepository) 
    {
        $this->ProductServiceRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->ProductServiceRepository->getAllProductServices()
        ]);
    }

    public function store(CreateProductServiceRequest $request): JsonResponse 
    {
        $user = ProductService::create($request->validated());
        return response()->json(['message' => 'ProductService created successfully']);
    }

}
