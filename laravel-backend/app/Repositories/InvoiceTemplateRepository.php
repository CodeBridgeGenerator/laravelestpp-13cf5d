<?php

namespace App\Repositories;

use App\Interfaces\InvoiceTemplateRepositoryInterface;
use App\Models\InvoiceTemplate;
use App\Http\Resources\InvoiceTemplateResource;

class InvoiceTemplateRepository implements InvoiceTemplateRepositoryInterface 
{
    public function getAllInvoiceTemplates() 
    {
        $invoiceTemplate = InvoiceTemplate::all();
        return InvoiceTemplateResource::collection($invoiceTemplate);
    }

    public function getInvoiceTemplateById($InvoiceTemplateId) 
    {
        $invoiceTemplate = InvoiceTemplate::findOrFail($InvoiceTemplateId);
        return InvoiceTemplateResource::collection($invoiceTemplate);
    }

    public function deleteInvoiceTemplate($InvoiceTemplateId) 
    {
        InvoiceTemplate::destroy($InvoiceTemplateId);
    }

    public function createInvoiceTemplate(array $InvoiceTemplateDetails) 
    {
        return InvoiceTemplate::create($InvoiceTemplateDetails);
    }

    public function updateInvoiceTemplate($InvoiceTemplateId, array $newDetails) 
    {
        $users = InvoiceTemplate::whereId($InvoiceTemplateId)->update($newDetails);
        return InvoiceTemplateResource::collection($invoiceTemplate);
    }

}