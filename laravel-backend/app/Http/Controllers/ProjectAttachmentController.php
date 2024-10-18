<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\ProjectAttachment;
use App\Interfaces\ProjectAttachmentRepositoryInterface;
use App\Http\Requests\CreateProjectAttachmentRequest;

class ProjectAttachmentController extends Controller
{
    private ProjectAttachmentRepositoryInterface $userRepository;

    public function __construct(ProjectAttachmentRepositoryInterface $userRepository) 
    {
        $this->ProjectAttachmentRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->ProjectAttachmentRepository->getAllProjectAttachments()
        ]);
    }

    public function store(CreateProjectAttachmentRequest $request): JsonResponse 
    {
        $user = ProjectAttachment::create($request->validated());
        return response()->json(['message' => 'ProjectAttachment created successfully']);
    }

}
