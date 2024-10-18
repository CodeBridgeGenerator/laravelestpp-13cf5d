<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\ProjectClient;
use App\Interfaces\ProjectClientRepositoryInterface;
use App\Http\Requests\CreateProjectClientRequest;

class ProjectClientController extends Controller
{
    private ProjectClientRepositoryInterface $userRepository;

    public function __construct(ProjectClientRepositoryInterface $userRepository) 
    {
        $this->ProjectClientRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->ProjectClientRepository->getAllProjectClients()
        ]);
    }

    public function store(CreateProjectClientRequest $request): JsonResponse 
    {
        $user = ProjectClient::create($request->validated());
        return response()->json(['message' => 'ProjectClient created successfully']);
    }

}
