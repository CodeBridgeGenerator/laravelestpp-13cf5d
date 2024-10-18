<?php

namespace App\Repositories;

use App\Interfaces\PurchasePaymentRepositoryInterface;
use App\Models\PurchasePayment;
use App\Http\Resources\PurchasePaymentResource;

class PurchasePaymentRepository implements PurchasePaymentRepositoryInterface 
{
    public function getAllPurchasePayments() 
    {
        $purchasePayment = PurchasePayment::all();
        return PurchasePaymentResource::collection($purchasePayment);
    }

    public function getPurchasePaymentById($PurchasePaymentId) 
    {
        $purchasePayment = PurchasePayment::findOrFail($PurchasePaymentId);
        return PurchasePaymentResource::collection($purchasePayment);
    }

    public function deletePurchasePayment($PurchasePaymentId) 
    {
        PurchasePayment::destroy($PurchasePaymentId);
    }

    public function createPurchasePayment(array $PurchasePaymentDetails) 
    {
        return PurchasePayment::create($PurchasePaymentDetails);
    }

    public function updatePurchasePayment($PurchasePaymentId, array $newDetails) 
    {
        $users = PurchasePayment::whereId($PurchasePaymentId)->update($newDetails);
        return PurchasePaymentResource::collection($purchasePayment);
    }

}