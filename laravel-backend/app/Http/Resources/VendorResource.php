<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class VendorResource extends JsonResource
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
'userId' => $this->userId,
'branchId' => $this->branchId,
'name' => $this->name,
'email' => $this->email,
'phoneNumber' => $this->phoneNumber,
'regNo' => $this->regNo,
'balance' => $this->balance,
'taxNo' => $this->taxNo,
'otherInfo' => $this->otherInfo,
'rememberToken' => $this->rememberToken,
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
