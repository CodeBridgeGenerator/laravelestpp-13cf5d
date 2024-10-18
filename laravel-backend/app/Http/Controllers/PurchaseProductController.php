<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\PurchaseProduct;
use App\Interfaces\PurchaseProductRepositoryInterface;
use App\Http\Requests\CreatePurchaseProductRequest;

class PurchaseProductController extends Controller
{
    private PurchaseProductRepositoryInterface $userRepository;

    public function __construct(PurchaseProductRepositoryInterface $userRepository) 
    {
        $this->PurchaseProductRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->PurchaseProductRepository->getAllPurchaseProducts()
        ]);
    }

    public function store(CreatePurchaseProductRequest $request): JsonResponse 
    {
        $user = PurchaseProduct::create($request->validated());
        return response()->json(['message' => 'PurchaseProduct created successfully']);
    }

}
