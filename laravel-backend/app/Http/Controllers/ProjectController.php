<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Project;
use App\Interfaces\ProjectRepositoryInterface;
use App\Http\Requests\CreateProjectRequest;

class ProjectController extends Controller
{
    private ProjectRepositoryInterface $userRepository;

    public function __construct(ProjectRepositoryInterface $userRepository) 
    {
        $this->ProjectRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->ProjectRepository->getAllProjects()
        ]);
    }

    public function store(CreateProjectRequest $request): JsonResponse 
    {
        $user = Project::create($request->validated());
        return response()->json(['message' => 'Project created successfully']);
    }

}
