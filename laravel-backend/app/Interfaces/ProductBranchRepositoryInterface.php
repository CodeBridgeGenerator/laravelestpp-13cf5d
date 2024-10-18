<?php

namespace App\Interfaces;

interface ProductBranchRepositoryInterface 
{
    public function getAllProductBranches();
    public function getProductBranchById($productBranchId);
    public function deleteProductBranch($productBranchId);
    public function createProductBranch(array $productBranchDetails);
    public function updateProductBranch($productBranchId, array $newDetails);
}