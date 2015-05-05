<?php namespace VM\Financial\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class CreateValidationProcessesTable extends Migration
{

    public function up()
    {
        Schema::create('vm_financial_validation_processes', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->timestamps();
            $table->integer('validator_id')->unsigned();
            $table->integer('executor_id')->unsigned();
            $table->string('name');
            $table->string('description')->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('vm_financial_validation_processes');
    }

}
