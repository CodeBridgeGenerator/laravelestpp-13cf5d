<?php

namespace App\Repositories;

use App\Interfaces\PaymentMethodRepositoryInterface;
use App\Models\PaymentMethod;
use App\Http\Resources\PaymentMethodResource;

class PaymentMethodRepository implements PaymentMethodRepositoryInterface 
{
    public function getAllPaymentMethods() 
    {
        $paymentMethods = PaymentMethod::all();
        return PaymentMethodResource::collection($paymentMethods);
    }

    public function getPaymentMethodById($PaymentMethodId) 
    {
        $paymentMethods = PaymentMethod::findOrFail($PaymentMethodId);
        return PaymentMethodResource::collection($paymentMethods);
    }

    public function deletePaymentMethod($PaymentMethodId) 
    {
        PaymentMethod::destroy($PaymentMethodId);
    }

    public function createPaymentMethod(array $PaymentMethodDetails) 
    {
        return PaymentMethod::create($PaymentMethodDetails);
    }

    public function updatePaymentMethod($PaymentMethodId, array $newDetails) 
    {
        $users = PaymentMethod::whereId($PaymentMethodId)->update($newDetails);
        return PaymentMethodResource::collection($paymentMethods);
    }

}