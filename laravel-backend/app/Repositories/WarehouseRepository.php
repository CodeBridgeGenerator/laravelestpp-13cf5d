<?php

namespace App\Repositories;

use App\Interfaces\WarehouseRepositoryInterface;
use App\Models\Warehouse;
use App\Http\Resources\WarehouseResource;

class WarehouseRepository implements WarehouseRepositoryInterface 
{
    public function getAllWarehouses() 
    {
        $warehouses = Warehouse::all();
        return WarehouseResource::collection($warehouses);
    }

    public function getWarehouseById($WarehouseId) 
    {
        $warehouses = Warehouse::findOrFail($WarehouseId);
        return WarehouseResource::collection($warehouses);
    }

    public function deleteWarehouse($WarehouseId) 
    {
        Warehouse::destroy($WarehouseId);
    }

    public function createWarehouse(array $WarehouseDetails) 
    {
        return Warehouse::create($WarehouseDetails);
    }

    public function updateWarehouse($WarehouseId, array $newDetails) 
    {
        $users = Warehouse::whereId($WarehouseId)->update($newDetails);
        return WarehouseResource::collection($warehouses);
    }

}