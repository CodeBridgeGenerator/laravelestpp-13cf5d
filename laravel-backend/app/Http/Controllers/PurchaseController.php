<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Purchase;
use App\Interfaces\PurchaseRepositoryInterface;
use App\Http\Requests\CreatePurchaseRequest;

class PurchaseController extends Controller
{
    private PurchaseRepositoryInterface $userRepository;

    public function __construct(PurchaseRepositoryInterface $userRepository) 
    {
        $this->PurchaseRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->PurchaseRepository->getAllPurchases()
        ]);
    }

    public function store(CreatePurchaseRequest $request): JsonResponse 
    {
        $user = Purchase::create($request->validated());
        return response()->json(['message' => 'Purchase created successfully']);
    }

}
