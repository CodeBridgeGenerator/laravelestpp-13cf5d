<?php

namespace App\Repositories;

use App\Interfaces\ProductServiceRepositoryInterface;
use App\Models\ProductService;
use App\Http\Resources\ProductServiceResource;

class ProductServiceRepository implements ProductServiceRepositoryInterface 
{
    public function getAllProductServices() 
    {
        $productServices = ProductService::all();
        return ProductServiceResource::collection($productServices);
    }

    public function getProductServiceById($ProductServiceId) 
    {
        $productServices = ProductService::findOrFail($ProductServiceId);
        return ProductServiceResource::collection($productServices);
    }

    public function deleteProductService($ProductServiceId) 
    {
        ProductService::destroy($ProductServiceId);
    }

    public function createProductService(array $ProductServiceDetails) 
    {
        return ProductService::create($ProductServiceDetails);
    }

    public function updateProductService($ProductServiceId, array $newDetails) 
    {
        $users = ProductService::whereId($ProductServiceId)->update($newDetails);
        return ProductServiceResource::collection($productServices);
    }

}