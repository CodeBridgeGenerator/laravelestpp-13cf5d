<?php

namespace App\Interfaces;

interface NewsRepositoryInterface 
{
    public function getAllNews();
    public function getNewsById($newsId);
    public function deleteNews($newsId);
    public function createNews(array $newsDetails);
    public function updateNews($newsId, array $newDetails);
}