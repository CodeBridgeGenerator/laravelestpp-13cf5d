<?php

namespace App\Interfaces;

interface CalendarRepositoryInterface 
{
    public function getAllCalendars();
    public function getCalendarById($calendarId);
    public function deleteCalendar($calendarId);
    public function createCalendar(array $calendarDetails);
    public function updateCalendar($calendarId, array $newDetails);
}