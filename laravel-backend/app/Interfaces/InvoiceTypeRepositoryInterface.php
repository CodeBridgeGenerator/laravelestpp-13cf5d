<?php

namespace App\Interfaces;

interface InvoiceTypeRepositoryInterface 
{
    public function getAllInvoiceTypes();
    public function getInvoiceTypeById($invoiceTypeId);
    public function deleteInvoiceType($invoiceTypeId);
    public function createInvoiceType(array $invoiceTypeDetails);
    public function updateInvoiceType($invoiceTypeId, array $newDetails);
}