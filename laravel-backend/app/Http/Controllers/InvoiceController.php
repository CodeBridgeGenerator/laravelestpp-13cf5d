<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Invoice;
use App\Interfaces\InvoiceRepositoryInterface;
use App\Http\Requests\CreateInvoiceRequest;

class InvoiceController extends Controller
{
    private InvoiceRepositoryInterface $userRepository;

    public function __construct(InvoiceRepositoryInterface $userRepository) 
    {
        $this->InvoiceRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->InvoiceRepository->getAllInvoices()
        ]);
    }

    public function store(CreateInvoiceRequest $request): JsonResponse 
    {
        $user = Invoice::create($request->validated());
        return response()->json(['message' => 'Invoice created successfully']);
    }

}
