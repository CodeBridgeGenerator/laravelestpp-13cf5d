<?php

namespace App\Repositories;

use App\Interfaces\PurchaseTypeRepositoryInterface;
use App\Models\PurchaseType;
use App\Http\Resources\PurchaseTypeResource;

class PurchaseTypeRepository implements PurchaseTypeRepositoryInterface 
{
    public function getAllPurchaseTypes() 
    {
        $purchaseType = PurchaseType::all();
        return PurchaseTypeResource::collection($purchaseType);
    }

    public function getPurchaseTypeById($PurchaseTypeId) 
    {
        $purchaseType = PurchaseType::findOrFail($PurchaseTypeId);
        return PurchaseTypeResource::collection($purchaseType);
    }

    public function deletePurchaseType($PurchaseTypeId) 
    {
        PurchaseType::destroy($PurchaseTypeId);
    }

    public function createPurchaseType(array $PurchaseTypeDetails) 
    {
        return PurchaseType::create($PurchaseTypeDetails);
    }

    public function updatePurchaseType($PurchaseTypeId, array $newDetails) 
    {
        $users = PurchaseType::whereId($PurchaseTypeId)->update($newDetails);
        return PurchaseTypeResource::collection($purchaseType);
    }

}