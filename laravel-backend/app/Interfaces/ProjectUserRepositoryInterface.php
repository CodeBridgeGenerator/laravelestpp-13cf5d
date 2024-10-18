<?php

namespace App\Interfaces;

interface ProjectUserRepositoryInterface 
{
    public function getAllProjectUsers();
    public function getProjectUserById($projectUserId);
    public function deleteProjectUser($projectUserId);
    public function createProjectUser(array $projectUserDetails);
    public function updateProjectUser($projectUserId, array $newDetails);
}