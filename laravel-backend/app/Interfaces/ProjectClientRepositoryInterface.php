<?php

namespace App\Interfaces;

interface ProjectClientRepositoryInterface 
{
    public function getAllProjectClients();
    public function getProjectClientById($projectClientId);
    public function deleteProjectClient($projectClientId);
    public function createProjectClient(array $projectClientDetails);
    public function updateProjectClient($projectClientId, array $newDetails);
}