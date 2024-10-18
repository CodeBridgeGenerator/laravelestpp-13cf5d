<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\CustomerType;
use App\Interfaces\CustomerTypeRepositoryInterface;
use App\Http\Requests\CreateCustomerTypeRequest;

class CustomerTypeController extends Controller
{
    private CustomerTypeRepositoryInterface $userRepository;

    public function __construct(CustomerTypeRepositoryInterface $userRepository) 
    {
        $this->CustomerTypeRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->CustomerTypeRepository->getAllCustomerTypes()
        ]);
    }

    public function store(CreateCustomerTypeRequest $request): JsonResponse 
    {
        $user = CustomerType::create($request->validated());
        return response()->json(['message' => 'CustomerType created successfully']);
    }

}
