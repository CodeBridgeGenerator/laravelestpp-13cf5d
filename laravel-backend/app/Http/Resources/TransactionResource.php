<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TransactionResource extends JsonResource
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
'date' => $this->date,
'reference' => $this->reference,
'description' => $this->description,
'branchId' => $this->branchId,
'accountId' => $this->accountId,
'modelType' => $this->modelType,
'modelId' => $this->modelId,
'type' => $this->type,
'debit' => $this->debit,
'credit' => $this->credit,
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
