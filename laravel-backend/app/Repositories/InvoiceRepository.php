<?php

namespace App\Repositories;

use App\Interfaces\InvoiceRepositoryInterface;
use App\Models\Invoice;
use App\Http\Resources\InvoiceResource;

class InvoiceRepository implements InvoiceRepositoryInterface 
{
    public function getAllInvoices() 
    {
        $invoices = Invoice::all();
        return InvoiceResource::collection($invoices);
    }

    public function getInvoiceById($InvoiceId) 
    {
        $invoices = Invoice::findOrFail($InvoiceId);
        return InvoiceResource::collection($invoices);
    }

    public function deleteInvoice($InvoiceId) 
    {
        Invoice::destroy($InvoiceId);
    }

    public function createInvoice(array $InvoiceDetails) 
    {
        return Invoice::create($InvoiceDetails);
    }

    public function updateInvoice($InvoiceId, array $newDetails) 
    {
        $users = Invoice::whereId($InvoiceId)->update($newDetails);
        return InvoiceResource::collection($invoices);
    }

}