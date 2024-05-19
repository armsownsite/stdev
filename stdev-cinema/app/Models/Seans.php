<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seans extends Model
{
    use HasFactory;
    protected $fillable = ['movies_id', 'rooms_id','seans_time', 'start_time', 'created_at', 'updated_at'];

}
