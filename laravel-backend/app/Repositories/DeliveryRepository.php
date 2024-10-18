<?php

namespace App\Repositories;

use App\Interfaces\DeliveryRepositoryInterface;
use App\Models\Delivery;
use App\Http\Resources\DeliveryResource;

class DeliveryRepository implements DeliveryRepositoryInterface 
{
    public function getAllDeliverys() 
    {
        $delivery = Delivery::all();
        return DeliveryResource::collection($delivery);
    }

    public function getDeliveryById($DeliveryId) 
    {
        $delivery = Delivery::findOrFail($DeliveryId);
        return DeliveryResource::collection($delivery);
    }

    public function deleteDelivery($DeliveryId) 
    {
        Delivery::destroy($DeliveryId);
    }

    public function createDelivery(array $DeliveryDetails) 
    {
        return Delivery::create($DeliveryDetails);
    }

    public function updateDelivery($DeliveryId, array $newDetails) 
    {
        $users = Delivery::whereId($DeliveryId)->update($newDetails);
        return DeliveryResource::collection($delivery);
    }

}