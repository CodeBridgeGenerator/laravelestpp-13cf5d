<?php

namespace App\Interfaces;

interface PurchasePaymentRepositoryInterface 
{
    public function getAllPurchasePayments();
    public function getPurchasePaymentById($purchasePaymentId);
    public function deletePurchasePayment($purchasePaymentId);
    public function createPurchasePayment(array $purchasePaymentDetails);
    public function updatePurchasePayment($purchasePaymentId, array $newDetails);
}