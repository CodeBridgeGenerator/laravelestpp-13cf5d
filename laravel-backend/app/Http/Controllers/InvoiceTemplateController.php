<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\InvoiceTemplate;
use App\Interfaces\InvoiceTemplateRepositoryInterface;
use App\Http\Requests\CreateInvoiceTemplateRequest;

class InvoiceTemplateController extends Controller
{
    private InvoiceTemplateRepositoryInterface $userRepository;

    public function __construct(InvoiceTemplateRepositoryInterface $userRepository) 
    {
        $this->InvoiceTemplateRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->InvoiceTemplateRepository->getAllInvoiceTemplates()
        ]);
    }

    public function store(CreateInvoiceTemplateRequest $request): JsonResponse 
    {
        $user = InvoiceTemplate::create($request->validated());
        return response()->json(['message' => 'InvoiceTemplate created successfully']);
    }

}
