<?php namespace VM\Financial\Models;

use Model;
use Carbon\Carbon;

/**
 * PaymentCat Model
 */
class PaymentCat extends Model
{

    /**
     * @var string The database table used by the model.
     */
    public $table = 'vm_financial_payment_cats';

    /**
     * @var array Guarded fields
     */
    protected $guarded = ['*'];

    /**
     * @var array Fillable fields
     */
    protected $fillable = [];

}
