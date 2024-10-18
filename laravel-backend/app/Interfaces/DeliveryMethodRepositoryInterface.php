<?php

namespace App\Interfaces;

interface DeliveryMethodRepositoryInterface 
{
    public function getAllDeliveryMethods();
    public function getDeliveryMethodById($deliveryMethodId);
    public function deleteDeliveryMethod($deliveryMethodId);
    public function createDeliveryMethod(array $deliveryMethodDetails);
    public function updateDeliveryMethod($deliveryMethodId, array $newDetails);
}