<?php

namespace App\Repositories;

use App\Interfaces\NewsRepositoryInterface;
use App\Models\News;
use App\Http\Resources\NewsResource;

class NewsRepository implements NewsRepositoryInterface 
{
    public function getAllNewss() 
    {
        $news = News::all();
        return NewsResource::collection($news);
    }

    public function getNewsById($NewsId) 
    {
        $news = News::findOrFail($NewsId);
        return NewsResource::collection($news);
    }

    public function deleteNews($NewsId) 
    {
        News::destroy($NewsId);
    }

    public function createNews(array $NewsDetails) 
    {
        return News::create($NewsDetails);
    }

    public function updateNews($NewsId, array $newDetails) 
    {
        $users = News::whereId($NewsId)->update($newDetails);
        return NewsResource::collection($news);
    }

}