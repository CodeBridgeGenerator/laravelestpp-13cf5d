<?php

namespace App\Interfaces;

interface DeliveryDetailRepositoryInterface 
{
    public function getAllDeliveryDetails();
    public function getDeliveryDetailById($deliveryDetailId);
    public function deleteDeliveryDetail($deliveryDetailId);
    public function createDeliveryDetail(array $deliveryDetailDetails);
    public function updateDeliveryDetail($deliveryDetailId, array $newDetails);
}