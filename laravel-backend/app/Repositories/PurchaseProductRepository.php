<?php

namespace App\Repositories;

use App\Interfaces\PurchaseProductRepositoryInterface;
use App\Models\PurchaseProduct;
use App\Http\Resources\PurchaseProductResource;

class PurchaseProductRepository implements PurchaseProductRepositoryInterface 
{
    public function getAllPurchaseProducts() 
    {
        $purchaseProduct = PurchaseProduct::all();
        return PurchaseProductResource::collection($purchaseProduct);
    }

    public function getPurchaseProductById($PurchaseProductId) 
    {
        $purchaseProduct = PurchaseProduct::findOrFail($PurchaseProductId);
        return PurchaseProductResource::collection($purchaseProduct);
    }

    public function deletePurchaseProduct($PurchaseProductId) 
    {
        PurchaseProduct::destroy($PurchaseProductId);
    }

    public function createPurchaseProduct(array $PurchaseProductDetails) 
    {
        return PurchaseProduct::create($PurchaseProductDetails);
    }

    public function updatePurchaseProduct($PurchaseProductId, array $newDetails) 
    {
        $users = PurchaseProduct::whereId($PurchaseProductId)->update($newDetails);
        return PurchaseProductResource::collection($purchaseProduct);
    }

}