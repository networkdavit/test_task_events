<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Event extends Model
{
    protected $fillable = [
        'title', 'description', 'event_datetime', 'location'
    ];


    public function scopeUpcoming($query)
    {
        return $query->where('event_datetime', '>', now());
    }
}

