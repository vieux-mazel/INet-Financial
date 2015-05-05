<?php namespace VM\Financial\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class CreateRemboursementsTable extends Migration
{

    public function up()
    {
        Schema::create('vm_financial_remboursements', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('amount')->nullable();
            $table->string('ccp')->nullable();
            $table->string('description')->nullable();
            $table->string('slug')->index()->unique();

            $table->integer('validated_by')->unsigned();
            $table->integer('executed_by')->unsigned();

            // TODO non boolean status for Paymenet
            $table->integer('category_id')->unsigned();
            $table->integer('validation_process_id')->unsigned();
            $table->enum('status', ['new', 'hold', 'moderated','done'])->default('new');
            $table->integer('remb_user_id')->unsigned();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('vm_financial_remboursements');
    }

}
