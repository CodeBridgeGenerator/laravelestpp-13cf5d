<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Variation;
use App\Interfaces\VariationRepositoryInterface;
use App\Http\Requests\CreateVariationRequest;

class VariationController extends Controller
{
    private VariationRepositoryInterface $userRepository;

    public function __construct(VariationRepositoryInterface $userRepository) 
    {
        $this->VariationRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->VariationRepository->getAllVariations()
        ]);
    }

    public function store(CreateVariationRequest $request): JsonResponse 
    {
        $user = Variation::create($request->validated());
        return response()->json(['message' => 'Variation created successfully']);
    }

}
