<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\DeliveryDetail;
use App\Interfaces\DeliveryDetailRepositoryInterface;
use App\Http\Requests\CreateDeliveryDetailRequest;

class DeliveryDetailController extends Controller
{
    private DeliveryDetailRepositoryInterface $userRepository;

    public function __construct(DeliveryDetailRepositoryInterface $userRepository) 
    {
        $this->DeliveryDetailRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->DeliveryDetailRepository->getAllDeliveryDetails()
        ]);
    }

    public function store(CreateDeliveryDetailRequest $request): JsonResponse 
    {
        $user = DeliveryDetail::create($request->validated());
        return response()->json(['message' => 'DeliveryDetail created successfully']);
    }

}
