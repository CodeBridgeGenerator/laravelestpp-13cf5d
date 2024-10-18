<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Warehouse;
use App\Interfaces\WarehouseRepositoryInterface;
use App\Http\Requests\CreateWarehouseRequest;

class WarehouseController extends Controller
{
    private WarehouseRepositoryInterface $userRepository;

    public function __construct(WarehouseRepositoryInterface $userRepository) 
    {
        $this->WarehouseRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->WarehouseRepository->getAllWarehouses()
        ]);
    }

    public function store(CreateWarehouseRequest $request): JsonResponse 
    {
        $user = Warehouse::create($request->validated());
        return response()->json(['message' => 'Warehouse created successfully']);
    }

}
