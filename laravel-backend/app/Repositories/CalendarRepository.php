<?php

namespace App\Repositories;

use App\Interfaces\CalendarRepositoryInterface;
use App\Models\Calendar;
use App\Http\Resources\CalendarResource;

class CalendarRepository implements CalendarRepositoryInterface 
{
    public function getAllCalendars() 
    {
        $calendar = Calendar::all();
        return CalendarResource::collection($calendar);
    }

    public function getCalendarById($CalendarId) 
    {
        $calendar = Calendar::findOrFail($CalendarId);
        return CalendarResource::collection($calendar);
    }

    public function deleteCalendar($CalendarId) 
    {
        Calendar::destroy($CalendarId);
    }

    public function createCalendar(array $CalendarDetails) 
    {
        return Calendar::create($CalendarDetails);
    }

    public function updateCalendar($CalendarId, array $newDetails) 
    {
        $users = Calendar::whereId($CalendarId)->update($newDetails);
        return CalendarResource::collection($calendar);
    }

}