<?php

namespace App\Interfaces;

interface MilestoneRepositoryInterface 
{
    public function getAllMilestones();
    public function getMilestoneById($milestoneId);
    public function deleteMilestone($milestoneId);
    public function createMilestone(array $milestoneDetails);
    public function updateMilestone($milestoneId, array $newDetails);
}