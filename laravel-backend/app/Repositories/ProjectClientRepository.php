<?php

namespace App\Repositories;

use App\Interfaces\ProjectClientRepositoryInterface;
use App\Models\ProjectClient;
use App\Http\Resources\ProjectClientResource;

class ProjectClientRepository implements ProjectClientRepositoryInterface 
{
    public function getAllProjectClients() 
    {
        $projectClient = ProjectClient::all();
        return ProjectClientResource::collection($projectClient);
    }

    public function getProjectClientById($ProjectClientId) 
    {
        $projectClient = ProjectClient::findOrFail($ProjectClientId);
        return ProjectClientResource::collection($projectClient);
    }

    public function deleteProjectClient($ProjectClientId) 
    {
        ProjectClient::destroy($ProjectClientId);
    }

    public function createProjectClient(array $ProjectClientDetails) 
    {
        return ProjectClient::create($ProjectClientDetails);
    }

    public function updateProjectClient($ProjectClientId, array $newDetails) 
    {
        $users = ProjectClient::whereId($ProjectClientId)->update($newDetails);
        return ProjectClientResource::collection($projectClient);
    }

}