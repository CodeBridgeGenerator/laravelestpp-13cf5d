<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Branch;
use App\Interfaces\BranchRepositoryInterface;
use App\Http\Requests\CreateBranchRequest;

class BranchController extends Controller
{
    private BranchRepositoryInterface $userRepository;

    public function __construct(BranchRepositoryInterface $userRepository) 
    {
        $this->BranchRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->BranchRepository->getAllBranches()
        ]);
    }

    public function store(CreateBranchRequest $request): JsonResponse 
    {
        $user = Branch::create($request->validated());
        return response()->json(['message' => 'Branch created successfully']);
    }

}
