<?php

namespace App\Repositories;

use App\Interfaces\TransactionRepositoryInterface;
use App\Models\Transaction;
use App\Http\Resources\TransactionResource;

class TransactionRepository implements TransactionRepositoryInterface 
{
    public function getAllTransactions() 
    {
        $transaction = Transaction::all();
        return TransactionResource::collection($transaction);
    }

    public function getTransactionById($TransactionId) 
    {
        $transaction = Transaction::findOrFail($TransactionId);
        return TransactionResource::collection($transaction);
    }

    public function deleteTransaction($TransactionId) 
    {
        Transaction::destroy($TransactionId);
    }

    public function createTransaction(array $TransactionDetails) 
    {
        return Transaction::create($TransactionDetails);
    }

    public function updateTransaction($TransactionId, array $newDetails) 
    {
        $users = Transaction::whereId($TransactionId)->update($newDetails);
        return TransactionResource::collection($transaction);
    }

}