<?php

namespace App\Interfaces;

interface InvoiceProductRepositoryInterface 
{
    public function getAllInvoiceProducts();
    public function getInvoiceProductById($invoiceProductId);
    public function deleteInvoiceProduct($invoiceProductId);
    public function createInvoiceProduct(array $invoiceProductDetails);
    public function updateInvoiceProduct($invoiceProductId, array $newDetails);
}