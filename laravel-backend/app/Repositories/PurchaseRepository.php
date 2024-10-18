<?php

namespace App\Repositories;

use App\Interfaces\PurchaseRepositoryInterface;
use App\Models\Purchase;
use App\Http\Resources\PurchaseResource;

class PurchaseRepository implements PurchaseRepositoryInterface 
{
    public function getAllPurchases() 
    {
        $purchase = Purchase::all();
        return PurchaseResource::collection($purchase);
    }

    public function getPurchaseById($PurchaseId) 
    {
        $purchase = Purchase::findOrFail($PurchaseId);
        return PurchaseResource::collection($purchase);
    }

    public function deletePurchase($PurchaseId) 
    {
        Purchase::destroy($PurchaseId);
    }

    public function createPurchase(array $PurchaseDetails) 
    {
        return Purchase::create($PurchaseDetails);
    }

    public function updatePurchase($PurchaseId, array $newDetails) 
    {
        $users = Purchase::whereId($PurchaseId)->update($newDetails);
        return PurchaseResource::collection($purchase);
    }

}