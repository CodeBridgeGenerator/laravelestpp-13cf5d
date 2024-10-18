<?php

namespace App\Repositories;

use App\Interfaces\QrMasterRepositoryInterface;
use App\Models\QrMaster;
use App\Http\Resources\QrMasterResource;

class QrMasterRepository implements QrMasterRepositoryInterface 
{
    public function getAllQrMasters() 
    {
        $qrMasters = QrMaster::all();
        return QrMasterResource::collection($qrMasters);
    }

    public function getQrMasterById($QrMasterId) 
    {
        $qrMasters = QrMaster::findOrFail($QrMasterId);
        return QrMasterResource::collection($qrMasters);
    }

    public function deleteQrMaster($QrMasterId) 
    {
        QrMaster::destroy($QrMasterId);
    }

    public function createQrMaster(array $QrMasterDetails) 
    {
        return QrMaster::create($QrMasterDetails);
    }

    public function updateQrMaster($QrMasterId, array $newDetails) 
    {
        $users = QrMaster::whereId($QrMasterId)->update($newDetails);
        return QrMasterResource::collection($qrMasters);
    }

}