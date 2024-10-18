<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Milestone;
use App\Interfaces\MilestoneRepositoryInterface;
use App\Http\Requests\CreateMilestoneRequest;

class MilestoneController extends Controller
{
    private MilestoneRepositoryInterface $userRepository;

    public function __construct(MilestoneRepositoryInterface $userRepository) 
    {
        $this->MilestoneRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->MilestoneRepository->getAllMilestones()
        ]);
    }

    public function store(CreateMilestoneRequest $request): JsonResponse 
    {
        $user = Milestone::create($request->validated());
        return response()->json(['message' => 'Milestone created successfully']);
    }

}
