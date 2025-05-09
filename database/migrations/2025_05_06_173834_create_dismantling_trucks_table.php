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
        Schema::create('dismantling_trucks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('automaker_id')->constrained()->cascadeOnDelete();
            $table->foreignId('warehouse_id')->constrained()->cascadeOnDelete();
            $table->string('model')->comment('Mesmo sentido de uma coluna chamada "nome", por exemplo. A diferença é que não tem que ter unicidade.');
            $table->string('chassi');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dismantling_trucks');
    }
};
