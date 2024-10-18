<?php

namespace App\Interfaces;

interface CustomerTypeRepositoryInterface 
{
    public function getAllCustomerTypes();
    public function getCustomerTypeById($customerTypeId);
    public function deleteCustomerType($customerTypeId);
    public function createCustomerType(array $customerTypeDetails);
    public function updateCustomerType($customerTypeId, array $newDetails);
}