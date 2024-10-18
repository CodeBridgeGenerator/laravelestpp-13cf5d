<?php

namespace App\Interfaces;

interface PurchaseTypeRepositoryInterface 
{
    public function getAllPurchaseTypes();
    public function getPurchaseTypeById($purchaseTypeId);
    public function deletePurchaseType($purchaseTypeId);
    public function createPurchaseType(array $purchaseTypeDetails);
    public function updatePurchaseType($purchaseTypeId, array $newDetails);
}