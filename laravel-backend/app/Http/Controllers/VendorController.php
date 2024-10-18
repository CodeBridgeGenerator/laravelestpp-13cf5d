<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Vendor;
use App\Interfaces\VendorRepositoryInterface;
use App\Http\Requests\CreateVendorRequest;

class VendorController extends Controller
{
    private VendorRepositoryInterface $userRepository;

    public function __construct(VendorRepositoryInterface $userRepository) 
    {
        $this->VendorRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->VendorRepository->getAllVendors()
        ]);
    }

    public function store(CreateVendorRequest $request): JsonResponse 
    {
        $user = Vendor::create($request->validated());
        return response()->json(['message' => 'Vendor created successfully']);
    }

}
