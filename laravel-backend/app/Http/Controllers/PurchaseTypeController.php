<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\PurchaseType;
use App\Interfaces\PurchaseTypeRepositoryInterface;
use App\Http\Requests\CreatePurchaseTypeRequest;

class PurchaseTypeController extends Controller
{
    private PurchaseTypeRepositoryInterface $userRepository;

    public function __construct(PurchaseTypeRepositoryInterface $userRepository) 
    {
        $this->PurchaseTypeRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->PurchaseTypeRepository->getAllPurchaseTypes()
        ]);
    }

    public function store(CreatePurchaseTypeRequest $request): JsonResponse 
    {
        $user = PurchaseType::create($request->validated());
        return response()->json(['message' => 'PurchaseType created successfully']);
    }

}
