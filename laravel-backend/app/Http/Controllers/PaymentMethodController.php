<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\PaymentMethod;
use App\Interfaces\PaymentMethodRepositoryInterface;
use App\Http\Requests\CreatePaymentMethodRequest;

class PaymentMethodController extends Controller
{
    private PaymentMethodRepositoryInterface $userRepository;

    public function __construct(PaymentMethodRepositoryInterface $userRepository) 
    {
        $this->PaymentMethodRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->PaymentMethodRepository->getAllPaymentMethods()
        ]);
    }

    public function store(CreatePaymentMethodRequest $request): JsonResponse 
    {
        $user = PaymentMethod::create($request->validated());
        return response()->json(['message' => 'PaymentMethod created successfully']);
    }

}
