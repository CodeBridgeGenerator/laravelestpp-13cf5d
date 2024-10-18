<?php

namespace App\Repositories;

use App\Interfaces\PosListRepositoryInterface;
use App\Models\PosList;
use App\Http\Resources\PosListResource;

class PosListRepository implements PosListRepositoryInterface 
{
    public function getAllPosLists() 
    {
        $posLists = PosList::all();
        return PosListResource::collection($posLists);
    }

    public function getPosListById($PosListId) 
    {
        $posLists = PosList::findOrFail($PosListId);
        return PosListResource::collection($posLists);
    }

    public function deletePosList($PosListId) 
    {
        PosList::destroy($PosListId);
    }

    public function createPosList(array $PosListDetails) 
    {
        return PosList::create($PosListDetails);
    }

    public function updatePosList($PosListId, array $newDetails) 
    {
        $users = PosList::whereId($PosListId)->update($newDetails);
        return PosListResource::collection($posLists);
    }

}