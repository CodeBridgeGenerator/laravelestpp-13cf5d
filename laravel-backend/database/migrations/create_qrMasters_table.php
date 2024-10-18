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
        if (Schema::hasTable('qrMasters')) {
            // // The "users" table exists...
            // for loop to check each field before create or alter
            // if (Schema::hasColumn('~cb-field-name~', 'email')) {
            //     // The "users" table exists and has an "email" column...
            // }
            // else {
                // Schema::table('qrMasters', function (Blueprint $table) {
                //     $table->id();
                //     cb-field-schema
                //     $table->timestamps();
                // });
            // }
        }
        else {
            Schema::create('qrMasters', function (Blueprint $table) {
                $table->id();
                $table->string('modelType');

$table->string('qrPath');

                $table->timestamps();
            });
        }


    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('qrMasters');
    }
};
