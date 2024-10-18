<?php

namespace App\Interfaces;

interface ProjectAttachmentRepositoryInterface 
{
    public function getAllProjectAttachments();
    public function getProjectAttachmentById($projectAttachmentId);
    public function deleteProjectAttachment($projectAttachmentId);
    public function createProjectAttachment(array $projectAttachmentDetails);
    public function updateProjectAttachment($projectAttachmentId, array $newDetails);
}