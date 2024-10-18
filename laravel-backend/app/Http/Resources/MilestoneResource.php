<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MilestoneResource extends JsonResource
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
'projectId' => $this->projectId,
'name' => $this->name,
'status' => $this->status,
'cost' => $this->cost,
'progress' => $this->progress,
'startDate' => $this->startDate,
'endDate' => $this->endDate,
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
