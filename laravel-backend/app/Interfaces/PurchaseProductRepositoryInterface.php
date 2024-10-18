<?php

namespace App\Interfaces;

interface PurchaseProductRepositoryInterface 
{
    public function getAllPurchaseProducts();
    public function getPurchaseProductById($purchaseProductId);
    public function deletePurchaseProduct($purchaseProductId);
    public function createPurchaseProduct(array $purchaseProductDetails);
    public function updatePurchaseProduct($purchaseProductId, array $newDetails);
}