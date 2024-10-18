<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\InvoicePayment;
use App\Interfaces\InvoicePaymentRepositoryInterface;
use App\Http\Requests\CreateInvoicePaymentRequest;

class InvoicePaymentController extends Controller
{
    private InvoicePaymentRepositoryInterface $userRepository;

    public function __construct(InvoicePaymentRepositoryInterface $userRepository) 
    {
        $this->InvoicePaymentRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->InvoicePaymentRepository->getAllInvoicePayments()
        ]);
    }

    public function store(CreateInvoicePaymentRequest $request): JsonResponse 
    {
        $user = InvoicePayment::create($request->validated());
        return response()->json(['message' => 'InvoicePayment created successfully']);
    }

}
