<?php

namespace App\Interfaces;

interface WarehouseRepositoryInterface 
{
    public function getAllWarehouses();
    public function getWarehouseById($warehouseId);
    public function deleteWarehouse($warehouseId);
    public function createWarehouse(array $warehouseDetails);
    public function updateWarehouse($warehouseId, array $newDetails);
}