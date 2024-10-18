<?php

namespace App\Interfaces;

interface QrMasterRepositoryInterface 
{
    public function getAllQrMasters();
    public function getQrMasterById($qrMasterId);
    public function deleteQrMaster($qrMasterId);
    public function createQrMaster(array $qrMasterDetails);
    public function updateQrMaster($qrMasterId, array $newDetails);
}