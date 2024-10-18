<?php

namespace App\Repositories;

use App\Interfaces\ProductBranchRepositoryInterface;
use App\Models\ProductBranch;
use App\Http\Resources\ProductBranchResource;

class ProductBranchRepository implements ProductBranchRepositoryInterface 
{
    public function getAllProductBranchs() 
    {
        $productBranches = ProductBranch::all();
        return ProductBranchResource::collection($productBranches);
    }

    public function getProductBranchById($ProductBranchId) 
    {
        $productBranches = ProductBranch::findOrFail($ProductBranchId);
        return ProductBranchResource::collection($productBranches);
    }

    public function deleteProductBranch($ProductBranchId) 
    {
        ProductBranch::destroy($ProductBranchId);
    }

    public function createProductBranch(array $ProductBranchDetails) 
    {
        return ProductBranch::create($ProductBranchDetails);
    }

    public function updateProductBranch($ProductBranchId, array $newDetails) 
    {
        $users = ProductBranch::whereId($ProductBranchId)->update($newDetails);
        return ProductBranchResource::collection($productBranches);
    }

}