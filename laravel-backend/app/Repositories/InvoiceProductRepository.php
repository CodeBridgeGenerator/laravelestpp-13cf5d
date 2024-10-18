<?php

namespace App\Repositories;

use App\Interfaces\InvoiceProductRepositoryInterface;
use App\Models\InvoiceProduct;
use App\Http\Resources\InvoiceProductResource;

class InvoiceProductRepository implements InvoiceProductRepositoryInterface 
{
    public function getAllInvoiceProducts() 
    {
        $invoiceProducts = InvoiceProduct::all();
        return InvoiceProductResource::collection($invoiceProducts);
    }

    public function getInvoiceProductById($InvoiceProductId) 
    {
        $invoiceProducts = InvoiceProduct::findOrFail($InvoiceProductId);
        return InvoiceProductResource::collection($invoiceProducts);
    }

    public function deleteInvoiceProduct($InvoiceProductId) 
    {
        InvoiceProduct::destroy($InvoiceProductId);
    }

    public function createInvoiceProduct(array $InvoiceProductDetails) 
    {
        return InvoiceProduct::create($InvoiceProductDetails);
    }

    public function updateInvoiceProduct($InvoiceProductId, array $newDetails) 
    {
        $users = InvoiceProduct::whereId($InvoiceProductId)->update($newDetails);
        return InvoiceProductResource::collection($invoiceProducts);
    }

}