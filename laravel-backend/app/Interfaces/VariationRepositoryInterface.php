<?php

namespace App\Interfaces;

interface VariationRepositoryInterface 
{
    public function getAllVariations();
    public function getVariationById($variationId);
    public function deleteVariation($variationId);
    public function createVariation(array $variationDetails);
    public function updateVariation($variationId, array $newDetails);
}