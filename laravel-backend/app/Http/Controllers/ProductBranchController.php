<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\ProductBranch;
use App\Interfaces\ProductBranchRepositoryInterface;
use App\Http\Requests\CreateProductBranchRequest;

class ProductBranchController extends Controller
{
    private ProductBranchRepositoryInterface $userRepository;

    public function __construct(ProductBranchRepositoryInterface $userRepository) 
    {
        $this->ProductBranchRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->ProductBranchRepository->getAllProductBranches()
        ]);
    }

    public function store(CreateProductBranchRequest $request): JsonResponse 
    {
        $user = ProductBranch::create($request->validated());
        return response()->json(['message' => 'ProductBranch created successfully']);
    }

}
