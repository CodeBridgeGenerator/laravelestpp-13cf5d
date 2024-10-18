<?php

namespace App\Repositories;

use App\Interfaces\VendorRepositoryInterface;
use App\Models\Vendor;
use App\Http\Resources\VendorResource;

class VendorRepository implements VendorRepositoryInterface 
{
    public function getAllVendors() 
    {
        $vendors = Vendor::all();
        return VendorResource::collection($vendors);
    }

    public function getVendorById($VendorId) 
    {
        $vendors = Vendor::findOrFail($VendorId);
        return VendorResource::collection($vendors);
    }

    public function deleteVendor($VendorId) 
    {
        Vendor::destroy($VendorId);
    }

    public function createVendor(array $VendorDetails) 
    {
        return Vendor::create($VendorDetails);
    }

    public function updateVendor($VendorId, array $newDetails) 
    {
        $users = Vendor::whereId($VendorId)->update($newDetails);
        return VendorResource::collection($vendors);
    }

}