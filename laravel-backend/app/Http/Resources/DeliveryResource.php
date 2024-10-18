<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DeliveryResource extends JsonResource
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
'modelType' => $this->modelType,
'modelId' => $this->modelId,
'deliveryAddress' => $this->deliveryAddress,
'receiverName' => $this->receiverName,
'receiverPhone' => $this->receiverPhone,
'attachmentPath' => $this->attachmentPath,
'deliveryMethod' => $this->deliveryMethod,
'deliveryNote' => $this->deliveryNote,
'deliveryStatus' => $this->deliveryStatus,
'consignmentNo' => $this->consignmentNo,
'consignmentBy' => $this->consignmentBy,
'deliveryDate' => $this->deliveryDate,
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
