<?php

namespace App\Repositories;

use App\Interfaces\ProjectUserRepositoryInterface;
use App\Models\ProjectUser;
use App\Http\Resources\ProjectUserResource;

class ProjectUserRepository implements ProjectUserRepositoryInterface 
{
    public function getAllProjectUsers() 
    {
        $projectUser = ProjectUser::all();
        return ProjectUserResource::collection($projectUser);
    }

    public function getProjectUserById($ProjectUserId) 
    {
        $projectUser = ProjectUser::findOrFail($ProjectUserId);
        return ProjectUserResource::collection($projectUser);
    }

    public function deleteProjectUser($ProjectUserId) 
    {
        ProjectUser::destroy($ProjectUserId);
    }

    public function createProjectUser(array $ProjectUserDetails) 
    {
        return ProjectUser::create($ProjectUserDetails);
    }

    public function updateProjectUser($ProjectUserId, array $newDetails) 
    {
        $users = ProjectUser::whereId($ProjectUserId)->update($newDetails);
        return ProjectUserResource::collection($projectUser);
    }

}