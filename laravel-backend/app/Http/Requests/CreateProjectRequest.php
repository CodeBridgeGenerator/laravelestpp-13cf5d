<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateProjectRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'string|max:250',
'type' => 'string|max:250',
'description' => 'string|max:250',
'status' => 'string|max:250',
'projectProgress' => 'string|max:250'
            // 'name' => 'required|string|max:250',
            // 'email' => 'required|email|max:250|unique:users',
            // 'password' => 'required|min:3|confirmed'
        ];
    }
}
