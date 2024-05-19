<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSeansRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'movies_id' => 'required|integer',
            'rooms_id' => 'required|integer',
            'seans_time' => 'required|integer',
            'start_time' => 'required|string',
        ];
    }
}
