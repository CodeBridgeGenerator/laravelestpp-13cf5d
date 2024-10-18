<?php

namespace App\Interfaces;

interface DeliveryRepositoryInterface 
{
    public function getAllDeliveries();
    public function getDeliveryById($deliveryId);
    public function deleteDelivery($deliveryId);
    public function createDelivery(array $deliveryDetails);
    public function updateDelivery($deliveryId, array $newDetails);
}