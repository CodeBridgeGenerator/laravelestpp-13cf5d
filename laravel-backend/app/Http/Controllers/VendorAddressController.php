<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\VendorAddress;
use App\Interfaces\VendorAddressRepositoryInterface;
use App\Http\Requests\CreateVendorAddressRequest;

class VendorAddressController extends Controller
{
    private VendorAddressRepositoryInterface $userRepository;

    public function __construct(VendorAddressRepositoryInterface $userRepository) 
    {
        $this->VendorAddressRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->VendorAddressRepository->getAllVendorAddresses()
        ]);
    }

    public function store(CreateVendorAddressRequest $request): JsonResponse 
    {
        $user = VendorAddress::create($request->validated());
        return response()->json(['message' => 'VendorAddress created successfully']);
    }

}
