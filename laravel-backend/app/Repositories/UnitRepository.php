<?php

namespace App\Repositories;

use App\Interfaces\UnitRepositoryInterface;
use App\Models\Unit;
use App\Http\Resources\UnitResource;

class UnitRepository implements UnitRepositoryInterface 
{
    public function getAllUnits() 
    {
        $unit = Unit::all();
        return UnitResource::collection($unit);
    }

    public function getUnitById($UnitId) 
    {
        $unit = Unit::findOrFail($UnitId);
        return UnitResource::collection($unit);
    }

    public function deleteUnit($UnitId) 
    {
        Unit::destroy($UnitId);
    }

    public function createUnit(array $UnitDetails) 
    {
        return Unit::create($UnitDetails);
    }

    public function updateUnit($UnitId, array $newDetails) 
    {
        $users = Unit::whereId($UnitId)->update($newDetails);
        return UnitResource::collection($unit);
    }

}