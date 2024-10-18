<?php

namespace App\Repositories;

use App\Interfaces\InvoiceTypeRepositoryInterface;
use App\Models\InvoiceType;
use App\Http\Resources\InvoiceTypeResource;

class InvoiceTypeRepository implements InvoiceTypeRepositoryInterface 
{
    public function getAllInvoiceTypes() 
    {
        $invoiceType = InvoiceType::all();
        return InvoiceTypeResource::collection($invoiceType);
    }

    public function getInvoiceTypeById($InvoiceTypeId) 
    {
        $invoiceType = InvoiceType::findOrFail($InvoiceTypeId);
        return InvoiceTypeResource::collection($invoiceType);
    }

    public function deleteInvoiceType($InvoiceTypeId) 
    {
        InvoiceType::destroy($InvoiceTypeId);
    }

    public function createInvoiceType(array $InvoiceTypeDetails) 
    {
        return InvoiceType::create($InvoiceTypeDetails);
    }

    public function updateInvoiceType($InvoiceTypeId, array $newDetails) 
    {
        $users = InvoiceType::whereId($InvoiceTypeId)->update($newDetails);
        return InvoiceTypeResource::collection($invoiceType);
    }

}