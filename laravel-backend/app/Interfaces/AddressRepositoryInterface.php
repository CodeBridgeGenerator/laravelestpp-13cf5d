<?php

namespace App\Interfaces;

interface AddressRepositoryInterface 
{
    public function getAllAddresses();
    public function getAddressById($addressId);
    public function deleteAddress($addressId);
    public function createAddress(array $addressDetails);
    public function updateAddress($addressId, array $newDetails);
}