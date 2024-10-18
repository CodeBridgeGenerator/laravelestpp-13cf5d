<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\DeliveryMethod;
use App\Interfaces\DeliveryMethodRepositoryInterface;
use App\Http\Requests\CreateDeliveryMethodRequest;

class DeliveryMethodController extends Controller
{
    private DeliveryMethodRepositoryInterface $userRepository;

    public function __construct(DeliveryMethodRepositoryInterface $userRepository) 
    {
        $this->DeliveryMethodRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->DeliveryMethodRepository->getAllDeliveryMethods()
        ]);
    }

    public function store(CreateDeliveryMethodRequest $request): JsonResponse 
    {
        $user = DeliveryMethod::create($request->validated());
        return response()->json(['message' => 'DeliveryMethod created successfully']);
    }

}
