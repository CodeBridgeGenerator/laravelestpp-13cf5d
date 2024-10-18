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
        if (Schema::hasTable('customerTypes')) {
            // // The "users" table exists...
            // for loop to check each field before create or alter
            // if (Schema::hasColumn('~cb-field-name~', 'email')) {
            //     // The "users" table exists and has an "email" column...
            // }
            // else {
                // Schema::table('customerTypes', function (Blueprint $table) {
                //     $table->id();
                //     cb-field-schema
                //     $table->timestamps();
                // });
            // }
        }
        else {
            Schema::create('customerTypes', function (Blueprint $table) {
                $table->id();
                $table->string('type');

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
        Schema::dropIfExists('customerTypes');
    }
};
