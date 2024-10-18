<?php

namespace App\Repositories;

use App\Interfaces\CustomerTypeRepositoryInterface;
use App\Models\CustomerType;
use App\Http\Resources\CustomerTypeResource;

class CustomerTypeRepository implements CustomerTypeRepositoryInterface 
{
    public function getAllCustomerTypes() 
    {
        $customerTypes = CustomerType::all();
        return CustomerTypeResource::collection($customerTypes);
    }

    public function getCustomerTypeById($CustomerTypeId) 
    {
        $customerTypes = CustomerType::findOrFail($CustomerTypeId);
        return CustomerTypeResource::collection($customerTypes);
    }

    public function deleteCustomerType($CustomerTypeId) 
    {
        CustomerType::destroy($CustomerTypeId);
    }

    public function createCustomerType(array $CustomerTypeDetails) 
    {
        return CustomerType::create($CustomerTypeDetails);
    }

    public function updateCustomerType($CustomerTypeId, array $newDetails) 
    {
        $users = CustomerType::whereId($CustomerTypeId)->update($newDetails);
        return CustomerTypeResource::collection($customerTypes);
    }

}