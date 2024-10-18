<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;


class InvoicePayment extends Model
{
    use HasApiTokens, HasFactory;

    protected $table = "invoicePayments";
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'branchId',
'invoiceId',
'date',
'amount',
'accountId',
'paymentMethod',
'reference',
'description',
'receiptPath',
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
