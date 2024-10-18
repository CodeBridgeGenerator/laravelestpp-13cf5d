<?php

namespace App\Interfaces;

interface UnitRepositoryInterface 
{
    public function getAllUnits();
    public function getUnitById($unitId);
    public function deleteUnit($unitId);
    public function createUnit(array $unitDetails);
    public function updateUnit($unitId, array $newDetails);
}