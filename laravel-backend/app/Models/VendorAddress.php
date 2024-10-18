<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;


class VendorAddress extends Model
{
    use HasApiTokens, HasFactory;

    protected $table = "vendorAddresses";
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'customerId',
'branchId',
'shippingAddress1',
'shippingAddress2',
'shippingAddress3',
'shippingCity',
'shippingState',
'postalCode',
'billingAddress1',
'billingAddress2',
'billingAddress3',
'billingCity',
'billingState',
'postalCode1',
'createdAt',
'updatedAt'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        
        // 'email_verified_at' => 'datetime',
        // 'password' => 'hashed',
    ];
}
