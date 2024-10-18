<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Delivery;
use App\Interfaces\DeliveryRepositoryInterface;
use App\Http\Requests\CreateDeliveryRequest;

class DeliveryController extends Controller
{
    private DeliveryRepositoryInterface $userRepository;

    public function __construct(DeliveryRepositoryInterface $userRepository) 
    {
        $this->DeliveryRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->DeliveryRepository->getAllDeliveries()
        ]);
    }

    public function store(CreateDeliveryRequest $request): JsonResponse 
    {
        $user = Delivery::create($request->validated());
        return response()->json(['message' => 'Delivery created successfully']);
    }

}
