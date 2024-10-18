<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AddressResource extends JsonResource
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
'customerId' => $this->customerId,
'branchId' => $this->branchId,
'shippingAddress1' => $this->shippingAddress1,
'shippingAddress2' => $this->shippingAddress2,
'shippingAddress3' => $this->shippingAddress3,
'shippingCity' => $this->shippingCity,
'shippingState' => $this->shippingState,
'postalCode' => $this->postalCode,
'billingAddress1' => $this->billingAddress1,
'billingAddress2' => $this->billingAddress2,
'billingAddress3' => $this->billingAddress3,
'billingCity' => $this->billingCity,
'billingState' => $this->billingState,
'postalCode1' => $this->postalCode1,
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
