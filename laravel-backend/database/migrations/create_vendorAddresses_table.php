<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        if (Schema::hasTable('vendorAddress')) {
            // // The "users" table exists...
            // for loop to check each field before create or alter
            // if (Schema::hasColumn('~cb-field-name~', 'email')) {
            //     // The "users" table exists and has an "email" column...
            // }
            // else {
                // Schema::table('vendorAddress', function (Blueprint $table) {
                //     $table->id();
                //     cb-field-schema
                //     $table->timestamps();
                // });
            // }
        }
        else {
            Schema::create('vendorAddress', function (Blueprint $table) {
                $table->id();
                $table->string('shippingAddress1');

$table->string('shippingAddress2');

$table->string('shippingAddress3');

$table->string('shippingCity');

$table->string('shippingState');

$table->string('billingAddress1');

$table->string('billingAddress2');

$table->string('billingAddress3');

$table->string('billingCity');

$table->string('billingState');

$table->string('createdAt');

$table->string('updatedAt');

                $table->timestamps();
            });
        }


    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vendorAddress');
    }
};
