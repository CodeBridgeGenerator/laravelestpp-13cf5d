<?php

namespace App\Repositories;

use App\Interfaces\VariationRepositoryInterface;
use App\Models\Variation;
use App\Http\Resources\VariationResource;

class VariationRepository implements VariationRepositoryInterface 
{
    public function getAllVariations() 
    {
        $variations = Variation::all();
        return VariationResource::collection($variations);
    }

    public function getVariationById($VariationId) 
    {
        $variations = Variation::findOrFail($VariationId);
        return VariationResource::collection($variations);
    }

    public function deleteVariation($VariationId) 
    {
        Variation::destroy($VariationId);
    }

    public function createVariation(array $VariationDetails) 
    {
        return Variation::create($VariationDetails);
    }

    public function updateVariation($VariationId, array $newDetails) 
    {
        $users = Variation::whereId($VariationId)->update($newDetails);
        return VariationResource::collection($variations);
    }

}