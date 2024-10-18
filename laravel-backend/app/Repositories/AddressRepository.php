<?php

namespace App\Repositories;

use App\Interfaces\AddressRepositoryInterface;
use App\Models\Address;
use App\Http\Resources\AddressResource;

class AddressRepository implements AddressRepositoryInterface 
{
    public function getAllAddresss() 
    {
        $addresses = Address::all();
        return AddressResource::collection($addresses);
    }

    public function getAddressById($AddressId) 
    {
        $addresses = Address::findOrFail($AddressId);
        return AddressResource::collection($addresses);
    }

    public function deleteAddress($AddressId) 
    {
        Address::destroy($AddressId);
    }

    public function createAddress(array $AddressDetails) 
    {
        return Address::create($AddressDetails);
    }

    public function updateAddress($AddressId, array $newDetails) 
    {
        $users = Address::whereId($AddressId)->update($newDetails);
        return AddressResource::collection($addresses);
    }

}