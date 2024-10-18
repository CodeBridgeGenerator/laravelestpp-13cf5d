<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\ProjectUser;
use App\Interfaces\ProjectUserRepositoryInterface;
use App\Http\Requests\CreateProjectUserRequest;

class ProjectUserController extends Controller
{
    private ProjectUserRepositoryInterface $userRepository;

    public function __construct(ProjectUserRepositoryInterface $userRepository) 
    {
        $this->ProjectUserRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->ProjectUserRepository->getAllProjectUsers()
        ]);
    }

    public function store(CreateProjectUserRequest $request): JsonResponse 
    {
        $user = ProjectUser::create($request->validated());
        return response()->json(['message' => 'ProjectUser created successfully']);
    }

}
