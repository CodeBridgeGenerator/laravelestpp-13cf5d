<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Transaction;
use App\Interfaces\TransactionRepositoryInterface;
use App\Http\Requests\CreateTransactionRequest;

class TransactionController extends Controller
{
    private TransactionRepositoryInterface $userRepository;

    public function __construct(TransactionRepositoryInterface $userRepository) 
    {
        $this->TransactionRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->TransactionRepository->getAllTransactions()
        ]);
    }

    public function store(CreateTransactionRequest $request): JsonResponse 
    {
        $user = Transaction::create($request->validated());
        return response()->json(['message' => 'Transaction created successfully']);
    }

}
