<?php

namespace App\Interfaces;

interface PurchaseRepositoryInterface 
{
    public function getAllPurchases();
    public function getPurchaseById($purchaseId);
    public function deletePurchase($purchaseId);
    public function createPurchase(array $purchaseDetails);
    public function updatePurchase($purchaseId, array $newDetails);
}