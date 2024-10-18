<?php

namespace App\Interfaces;

interface VendorAddressRepositoryInterface 
{
    public function getAllVendorAddresses();
    public function getVendorAddressById($vendorAddressId);
    public function deleteVendorAddress($vendorAddressId);
    public function createVendorAddress(array $vendorAddressDetails);
    public function updateVendorAddress($vendorAddressId, array $newDetails);
}