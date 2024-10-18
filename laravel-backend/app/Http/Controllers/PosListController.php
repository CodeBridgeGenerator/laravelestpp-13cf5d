<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\PosList;
use App\Interfaces\PosListRepositoryInterface;
use App\Http\Requests\CreatePosListRequest;

class PosListController extends Controller
{
    private PosListRepositoryInterface $userRepository;

    public function __construct(PosListRepositoryInterface $userRepository) 
    {
        $this->PosListRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->PosListRepository->getAllPosLists()
        ]);
    }

    public function store(CreatePosListRequest $request): JsonResponse 
    {
        $user = PosList::create($request->validated());
        return response()->json(['message' => 'PosList created successfully']);
    }

}
