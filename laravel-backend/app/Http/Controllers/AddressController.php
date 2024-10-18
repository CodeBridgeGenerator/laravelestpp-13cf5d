<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Address;
use App\Interfaces\AddressRepositoryInterface;
use App\Http\Requests\CreateAddressRequest;

class AddressController extends Controller
{
    private AddressRepositoryInterface $userRepository;

    public function __construct(AddressRepositoryInterface $userRepository) 
    {
        $this->AddressRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->AddressRepository->getAllAddresses()
        ]);
    }

    public function store(CreateAddressRequest $request): JsonResponse 
    {
        $user = Address::create($request->validated());
        return response()->json(['message' => 'Address created successfully']);
    }

}
