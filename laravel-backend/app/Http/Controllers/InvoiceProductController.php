<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\InvoiceProduct;
use App\Interfaces\InvoiceProductRepositoryInterface;
use App\Http\Requests\CreateInvoiceProductRequest;

class InvoiceProductController extends Controller
{
    private InvoiceProductRepositoryInterface $userRepository;

    public function __construct(InvoiceProductRepositoryInterface $userRepository) 
    {
        $this->InvoiceProductRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->InvoiceProductRepository->getAllInvoiceProducts()
        ]);
    }

    public function store(CreateInvoiceProductRequest $request): JsonResponse 
    {
        $user = InvoiceProduct::create($request->validated());
        return response()->json(['message' => 'InvoiceProduct created successfully']);
    }

}
