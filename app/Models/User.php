<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Str;

class User extends Authenticatable
{
    use Notifiable;

    // Use UUID as the primary key
    protected $keyType = 'string';
    public $incrementing = false; // Disable auto-incrementing since UUID is used

    protected $fillable = [
        'name',
        'email',
        'password',
        'profile_picture',
        'phone_number',
        'address',
        'role',
        'status',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // Automatically generate UUID when creating a new user
    protected static function booted()
    {
        static::creating(function ($user) {
            if (empty($user->id)) {
                $user->id = Str::uuid()->toString();
            }
        });
    }
}
