<?php

namespace App\Repositories;

use App\Interfaces\DeliveryDetailRepositoryInterface;
use App\Models\DeliveryDetail;
use App\Http\Resources\DeliveryDetailResource;

class DeliveryDetailRepository implements DeliveryDetailRepositoryInterface 
{
    public function getAllDeliveryDetails() 
    {
        $deliveryDetail = DeliveryDetail::all();
        return DeliveryDetailResource::collection($deliveryDetail);
    }

    public function getDeliveryDetailById($DeliveryDetailId) 
    {
        $deliveryDetail = DeliveryDetail::findOrFail($DeliveryDetailId);
        return DeliveryDetailResource::collection($deliveryDetail);
    }

    public function deleteDeliveryDetail($DeliveryDetailId) 
    {
        DeliveryDetail::destroy($DeliveryDetailId);
    }

    public function createDeliveryDetail(array $DeliveryDetailDetails) 
    {
        return DeliveryDetail::create($DeliveryDetailDetails);
    }

    public function updateDeliveryDetail($DeliveryDetailId, array $newDetails) 
    {
        $users = DeliveryDetail::whereId($DeliveryDetailId)->update($newDetails);
        return DeliveryDetailResource::collection($deliveryDetail);
    }

}