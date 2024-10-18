<?php

namespace App\Interfaces;

interface InvoicePaymentRepositoryInterface 
{
    public function getAllInvoicePayments();
    public function getInvoicePaymentById($invoicePaymentId);
    public function deleteInvoicePayment($invoicePaymentId);
    public function createInvoicePayment(array $invoicePaymentDetails);
    public function updateInvoicePayment($invoicePaymentId, array $newDetails);
}