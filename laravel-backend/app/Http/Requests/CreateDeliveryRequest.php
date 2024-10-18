<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateDeliveryRequest extends FormRequest
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
            'modelType' => 'string|max:250',
'deliveryAddress' => 'string|max:250',
'receiverName' => 'string|max:250',
'receiverPhone' => 'string|max:250',
'attachmentPath' => 'string|max:250',
'deliveryMethod' => 'string|max:250',
'deliveryNote' => 'string|max:250',
'deliveryStatus' => 'string|max:250',
'consignmentNo' => 'string|max:250',
'consignmentBy' => 'string|max:250'
            // 'name' => 'required|string|max:250',
            // 'email' => 'required|email|max:250|unique:users',
            // 'password' => 'required|min:3|confirmed'
        ];
    }
}
