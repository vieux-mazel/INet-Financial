<?php namespace VM\Financial\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class CreatePaymentCatsTable extends Migration
{

    public function up()
    {
        Schema::create('vm_financial_payment_cats', function($table)
        {
            $table->integer('remboursement_id')->unsigned();
            $table->integer('category_id')->unsigned();
            $table->timestamps();
            $table->primary(['remboursement_id', 'category_id']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('vm_financial_payment_cats');
    }

}
