<?php

namespace App\Repositories;

use App\Interfaces\ProjectAttachmentRepositoryInterface;
use App\Models\ProjectAttachment;
use App\Http\Resources\ProjectAttachmentResource;

class ProjectAttachmentRepository implements ProjectAttachmentRepositoryInterface 
{
    public function getAllProjectAttachments() 
    {
        $projectAttachment = ProjectAttachment::all();
        return ProjectAttachmentResource::collection($projectAttachment);
    }

    public function getProjectAttachmentById($ProjectAttachmentId) 
    {
        $projectAttachment = ProjectAttachment::findOrFail($ProjectAttachmentId);
        return ProjectAttachmentResource::collection($projectAttachment);
    }

    public function deleteProjectAttachment($ProjectAttachmentId) 
    {
        ProjectAttachment::destroy($ProjectAttachmentId);
    }

    public function createProjectAttachment(array $ProjectAttachmentDetails) 
    {
        return ProjectAttachment::create($ProjectAttachmentDetails);
    }

    public function updateProjectAttachment($ProjectAttachmentId, array $newDetails) 
    {
        $users = ProjectAttachment::whereId($ProjectAttachmentId)->update($newDetails);
        return ProjectAttachmentResource::collection($projectAttachment);
    }

}