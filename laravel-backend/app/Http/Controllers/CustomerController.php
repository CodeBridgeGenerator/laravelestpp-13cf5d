<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Customer;
use App\Interfaces\CustomerRepositoryInterface;
use App\Http\Requests\CreateCustomerRequest;

class CustomerController extends Controller
{
    private CustomerRepositoryInterface $userRepository;

    public function __construct(CustomerRepositoryInterface $userRepository) 
    {
        $this->CustomerRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->CustomerRepository->getAllCustomers()
        ]);
    }

    public function store(CreateCustomerRequest $request): JsonResponse 
    {
        $user = Customer::create($request->validated());
        return response()->json(['message' => 'Customer created successfully']);
    }

}
