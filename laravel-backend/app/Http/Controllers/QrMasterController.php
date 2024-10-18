<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\QrMaster;
use App\Interfaces\QrMasterRepositoryInterface;
use App\Http\Requests\CreateQrMasterRequest;

class QrMasterController extends Controller
{
    private QrMasterRepositoryInterface $userRepository;

    public function __construct(QrMasterRepositoryInterface $userRepository) 
    {
        $this->QrMasterRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->QrMasterRepository->getAllQrMasters()
        ]);
    }

    public function store(CreateQrMasterRequest $request): JsonResponse 
    {
        $user = QrMaster::create($request->validated());
        return response()->json(['message' => 'QrMaster created successfully']);
    }

}
