<?php

namespace App\Repositories;

use App\Interfaces\CustomerRepositoryInterface;
use App\Models\Customer;
use App\Http\Resources\CustomerResource;

class CustomerRepository implements CustomerRepositoryInterface 
{
    public function getAllCustomers() 
    {
        $customers = Customer::all();
        return CustomerResource::collection($customers);
    }

    public function getCustomerById($CustomerId) 
    {
        $customers = Customer::findOrFail($CustomerId);
        return CustomerResource::collection($customers);
    }

    public function deleteCustomer($CustomerId) 
    {
        Customer::destroy($CustomerId);
    }

    public function createCustomer(array $CustomerDetails) 
    {
        return Customer::create($CustomerDetails);
    }

    public function updateCustomer($CustomerId, array $newDetails) 
    {
        $users = Customer::whereId($CustomerId)->update($newDetails);
        return CustomerResource::collection($customers);
    }

}