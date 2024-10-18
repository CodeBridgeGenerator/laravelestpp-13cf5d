<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class InvoiceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            '_id' => $this->id,
'branchId' => $this->branchId,
'customerId' => $this->customerId,
'invoiceDate' => $this->invoiceDate,
'categoryId' => $this->categoryId,
'status' => $this->status,
'createdBy' => $this->createdBy,
'source' => $this->source,
'deliveryStatus' => $this->deliveryStatus,
'description' => $this->description,
'createdAt' => $this->createdAt,
'updatedAt' => $this->updatedAt
            // '_id' => $this->id,
            // 'name' => $this->name,
            // 'email' => $this->email,
            // 'email_verified_at' => $this->email_verified_at,
            // 'remember_token' => $this->remember_token,
            // 'created_at' => $this->created_at,
            // 'updated_at' => $this->updated_at
        ];
    }
}
