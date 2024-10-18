<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Calendar;
use App\Interfaces\CalendarRepositoryInterface;
use App\Http\Requests\CreateCalendarRequest;

class CalendarController extends Controller
{
    private CalendarRepositoryInterface $userRepository;

    public function __construct(CalendarRepositoryInterface $userRepository) 
    {
        $this->CalendarRepository = $userRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->CalendarRepository->getAllCalendars()
        ]);
    }

    public function store(CreateCalendarRequest $request): JsonResponse 
    {
        $user = Calendar::create($request->validated());
        return response()->json(['message' => 'Calendar created successfully']);
    }

}
