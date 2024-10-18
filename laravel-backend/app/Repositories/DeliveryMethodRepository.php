<?php

namespace App\Repositories;

use App\Interfaces\DeliveryMethodRepositoryInterface;
use App\Models\DeliveryMethod;
use App\Http\Resources\DeliveryMethodResource;

class DeliveryMethodRepository implements DeliveryMethodRepositoryInterface 
{
    public function getAllDeliveryMethods() 
    {
        $deliveryMethod = DeliveryMethod::all();
        return DeliveryMethodResource::collection($deliveryMethod);
    }

    public function getDeliveryMethodById($DeliveryMethodId) 
    {
        $deliveryMethod = DeliveryMethod::findOrFail($DeliveryMethodId);
        return DeliveryMethodResource::collection($deliveryMethod);
    }

    public function deleteDeliveryMethod($DeliveryMethodId) 
    {
        DeliveryMethod::destroy($DeliveryMethodId);
    }

    public function createDeliveryMethod(array $DeliveryMethodDetails) 
    {
        return DeliveryMethod::create($DeliveryMethodDetails);
    }

    public function updateDeliveryMethod($DeliveryMethodId, array $newDetails) 
    {
        $users = DeliveryMethod::whereId($DeliveryMethodId)->update($newDetails);
        return DeliveryMethodResource::collection($deliveryMethod);
    }

}