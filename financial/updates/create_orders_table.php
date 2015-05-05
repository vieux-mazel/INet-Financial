<?php namespace VM\Financial\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class CreateOrdersTable extends Migration
{

    public function up()
    {
        Schema::create('vm_financial_orders', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('vm_financial_orders');
    }

}
