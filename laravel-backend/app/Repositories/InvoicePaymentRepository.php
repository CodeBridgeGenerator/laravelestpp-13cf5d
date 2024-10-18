<?php

namespace App\Repositories;

use App\Interfaces\InvoicePaymentRepositoryInterface;
use App\Models\InvoicePayment;
use App\Http\Resources\InvoicePaymentResource;

class InvoicePaymentRepository implements InvoicePaymentRepositoryInterface 
{
    public function getAllInvoicePayments() 
    {
        $invoicePayment = InvoicePayment::all();
        return InvoicePaymentResource::collection($invoicePayment);
    }

    public function getInvoicePaymentById($InvoicePaymentId) 
    {
        $invoicePayment = InvoicePayment::findOrFail($InvoicePaymentId);
        return InvoicePaymentResource::collection($invoicePayment);
    }

    public function deleteInvoicePayment($InvoicePaymentId) 
    {
        InvoicePayment::destroy($InvoicePaymentId);
    }

    public function createInvoicePayment(array $InvoicePaymentDetails) 
    {
        return InvoicePayment::create($InvoicePaymentDetails);
    }

    public function updateInvoicePayment($InvoicePaymentId, array $newDetails) 
    {
        $users = InvoicePayment::whereId($InvoicePaymentId)->update($newDetails);
        return InvoicePaymentResource::collection($invoicePayment);
    }

}