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
        Schema::create('seans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('movies_id')->unsigned();
            $table->foreignId('rooms_id');
            $table->integer('seans_time');
            $table->dateTime('start_time');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('seans');
    }
};
