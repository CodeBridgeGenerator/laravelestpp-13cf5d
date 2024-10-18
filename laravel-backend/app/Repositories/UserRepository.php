<?php

namespace App\Repositories;

use App\Interfaces\UserRepositoryInterface;
use App\Models\User;
use App\Http\Resources\UserResource;

class UserRepository implements UserRepositoryInterface 
{
    public function getAllUsers() 
    {
        $users = User::all();
        return UserResource::collection($users);
    }

    public function getUserById($UserId) 
    {
        $users = User::findOrFail($UserId);
        return UserResource::collection($users);
    }

    public function deleteUser($UserId) 
    {
        User::destroy($UserId);
    }

    public function createUser(array $UserDetails) 
    {
        return User::create($UserDetails);
    }

    public function updateUser($UserId, array $newDetails) 
    {
        $users = User::whereId($UserId)->update($newDetails);
        return UserResource::collection($users);
    }

}