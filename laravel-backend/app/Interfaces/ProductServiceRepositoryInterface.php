<?php

namespace App\Interfaces;

interface ProductServiceRepositoryInterface 
{
    public function getAllProductServices();
    public function getProductServiceById($productServiceId);
    public function deleteProductService($productServiceId);
    public function createProductService(array $productServiceDetails);
    public function updateProductService($productServiceId, array $newDetails);
}