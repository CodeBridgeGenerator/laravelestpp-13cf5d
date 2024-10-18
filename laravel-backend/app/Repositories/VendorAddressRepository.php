<?php

namespace App\Repositories;

use App\Interfaces\VendorAddressRepositoryInterface;
use App\Models\VendorAddress;
use App\Http\Resources\VendorAddressResource;

class VendorAddressRepository implements VendorAddressRepositoryInterface 
{
    public function getAllVendorAddresss() 
    {
        $vendorAddress = VendorAddress::all();
        return VendorAddressResource::collection($vendorAddress);
    }

    public function getVendorAddressById($VendorAddressId) 
    {
        $vendorAddress = VendorAddress::findOrFail($VendorAddressId);
        return VendorAddressResource::collection($vendorAddress);
    }

    public function deleteVendorAddress($VendorAddressId) 
    {
        VendorAddress::destroy($VendorAddressId);
    }

    public function createVendorAddress(array $VendorAddressDetails) 
    {
        return VendorAddress::create($VendorAddressDetails);
    }

    public function updateVendorAddress($VendorAddressId, array $newDetails) 
    {
        $users = VendorAddress::whereId($VendorAddressId)->update($newDetails);
        return VendorAddressResource::collection($vendorAddress);
    }

}