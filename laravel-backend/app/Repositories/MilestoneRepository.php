<?php

namespace App\Repositories;

use App\Interfaces\MilestoneRepositoryInterface;
use App\Models\Milestone;
use App\Http\Resources\MilestoneResource;

class MilestoneRepository implements MilestoneRepositoryInterface 
{
    public function getAllMilestones() 
    {
        $milestone = Milestone::all();
        return MilestoneResource::collection($milestone);
    }

    public function getMilestoneById($MilestoneId) 
    {
        $milestone = Milestone::findOrFail($MilestoneId);
        return MilestoneResource::collection($milestone);
    }

    public function deleteMilestone($MilestoneId) 
    {
        Milestone::destroy($MilestoneId);
    }

    public function createMilestone(array $MilestoneDetails) 
    {
        return Milestone::create($MilestoneDetails);
    }

    public function updateMilestone($MilestoneId, array $newDetails) 
    {
        $users = Milestone::whereId($MilestoneId)->update($newDetails);
        return MilestoneResource::collection($milestone);
    }

}