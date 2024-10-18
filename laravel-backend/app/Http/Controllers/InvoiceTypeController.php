<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\InvoiceType;
use App\Interfaces\InvoiceTypeRepositoryInterface;
use App\Http\Requests\CreateInvoiceTypeRequest;

class InvoiceTypeController extends Controller
{
    private InvoiceTypeRepositoryInterface $userRepository;

    public function __construct(InvoiceTypeRepositoryInterface $userRepository) 
    {
        $this->InvoiceTypeRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->InvoiceTypeRepository->getAllInvoiceTypes()
        ]);
    }

    public function store(CreateInvoiceTypeRequest $request): JsonResponse 
    {
        $user = InvoiceType::create($request->validated());
        return response()->json(['message' => 'InvoiceType created successfully']);
    }

}
