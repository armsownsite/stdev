<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateMovieRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:1000',
            'image' => 'nullable|string',
            'description' => 'nullable|string', 
            'slug' => 'nullable|string|max:1000' ,
            'id' => 'integer' 
        ];
    }
}
