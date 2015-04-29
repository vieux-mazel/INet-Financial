<?php namespace VM\Financial\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class CreateCategoriesTable extends Migration
{

    public function up()
    {
        Schema::create('vm_financial_categories', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name');
            $table->timestamps();
            $table->integer('validation_process_id')->unsigned();
        });
    }

    public function down()
    {
        Schema::dropIfExists('vm_financial_categories');
    }

}
