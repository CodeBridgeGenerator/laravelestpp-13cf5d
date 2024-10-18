<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Unit;
use App\Interfaces\UnitRepositoryInterface;
use App\Http\Requests\CreateUnitRequest;

class UnitController extends Controller
{
    private UnitRepositoryInterface $userRepository;

    public function __construct(UnitRepositoryInterface $userRepository) 
    {
        $this->UnitRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->UnitRepository->getAllUnits()
        ]);
    }

    public function store(CreateUnitRequest $request): JsonResponse 
    {
        $user = Unit::create($request->validated());
        return response()->json(['message' => 'Unit created successfully']);
    }

}
