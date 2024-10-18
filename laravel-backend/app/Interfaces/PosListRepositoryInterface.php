<?php

namespace App\Interfaces;

interface PosListRepositoryInterface 
{
    public function getAllPosLists();
    public function getPosListById($posListId);
    public function deletePosList($posListId);
    public function createPosList(array $posListDetails);
    public function updatePosList($posListId, array $newDetails);
}