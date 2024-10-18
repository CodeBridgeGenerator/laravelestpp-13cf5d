<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\PurchasePayment;
use App\Interfaces\PurchasePaymentRepositoryInterface;
use App\Http\Requests\CreatePurchasePaymentRequest;

class PurchasePaymentController extends Controller
{
    private PurchasePaymentRepositoryInterface $userRepository;

    public function __construct(PurchasePaymentRepositoryInterface $userRepository) 
    {
        $this->PurchasePaymentRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->PurchasePaymentRepository->getAllPurchasePayments()
        ]);
    }

    public function store(CreatePurchasePaymentRequest $request): JsonResponse 
    {
        $user = PurchasePayment::create($request->validated());
        return response()->json(['message' => 'PurchasePayment created successfully']);
    }

}
