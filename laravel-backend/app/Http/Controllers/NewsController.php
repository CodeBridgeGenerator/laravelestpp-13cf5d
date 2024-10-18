<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\News;
use App\Interfaces\NewsRepositoryInterface;
use App\Http\Requests\CreateNewsRequest;

class NewsController extends Controller
{
    private NewsRepositoryInterface $userRepository;

    public function __construct(NewsRepositoryInterface $userRepository) 
    {
        $this->NewsRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->NewsRepository->getAllNews()
        ]);
    }

    public function store(CreateNewsRequest $request): JsonResponse 
    {
        $user = News::create($request->validated());
        return response()->json(['message' => 'News created successfully']);
    }

}
