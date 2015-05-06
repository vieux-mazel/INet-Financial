<?php namespace VM\Financial\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class CreateMembersTable extends Migration
{

    public function up()
    {
        Schema::create('vm_financial_members', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->integer('user_id')->unsigned()->index()->nullable();
            $table->string('slug')->nullable();
            $table->string('username')->nullable();
            $table->string('email');
            $table->string('npa')->nullable();
            $table->string('city')->nullable();
            $table->string('address')->nullable();
            $table->string('ccp');
            $table->boolean('is_confirmed')->default(false);
            #$table->integer('count_posts')->index()->default(0);
            #$table->integer('count_topics')->index()->default(0);
            $table->dateTime('last_active_at')->index()->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('vm_financial_members');
    }

}
