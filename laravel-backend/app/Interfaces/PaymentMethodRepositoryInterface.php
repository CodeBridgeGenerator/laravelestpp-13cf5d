<?php

namespace App\Interfaces;

interface PaymentMethodRepositoryInterface 
{
    public function getAllPaymentMethods();
    public function getPaymentMethodById($paymentMethodId);
    public function deletePaymentMethod($paymentMethodId);
    public function createPaymentMethod(array $paymentMethodDetails);
    public function updatePaymentMethod($paymentMethodId, array $newDetails);
}