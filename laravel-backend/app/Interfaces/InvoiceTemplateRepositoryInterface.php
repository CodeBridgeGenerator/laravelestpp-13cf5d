<?php

namespace App\Interfaces;

interface InvoiceTemplateRepositoryInterface 
{
    public function getAllInvoiceTemplates();
    public function getInvoiceTemplateById($invoiceTemplateId);
    public function deleteInvoiceTemplate($invoiceTemplateId);
    public function createInvoiceTemplate(array $invoiceTemplateDetails);
    public function updateInvoiceTemplate($invoiceTemplateId, array $newDetails);
}