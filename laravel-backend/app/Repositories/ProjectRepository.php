<?php

namespace App\Repositories;

use App\Interfaces\ProjectRepositoryInterface;
use App\Models\Project;
use App\Http\Resources\ProjectResource;

class ProjectRepository implements ProjectRepositoryInterface 
{
    public function getAllProjects() 
    {
        $project = Project::all();
        return ProjectResource::collection($project);
    }

    public function getProjectById($ProjectId) 
    {
        $project = Project::findOrFail($ProjectId);
        return ProjectResource::collection($project);
    }

    public function deleteProject($ProjectId) 
    {
        Project::destroy($ProjectId);
    }

    public function createProject(array $ProjectDetails) 
    {
        return Project::create($ProjectDetails);
    }

    public function updateProject($ProjectId, array $newDetails) 
    {
        $users = Project::whereId($ProjectId)->update($newDetails);
        return ProjectResource::collection($project);
    }

}