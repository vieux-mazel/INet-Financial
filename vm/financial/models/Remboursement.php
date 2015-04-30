<?php namespace VM\Financial\Models;

use Model;
use \October\Rain\Database\Traits\Validation;

/**
 * Remboursement Model
 */
class Remboursement extends Model
{

    /**
     * @var string The database table used by the model.
     */
    public $table = 'vm_financial_remboursements';

    /**
     * @var array Guarded fields
     */
    protected $guarded = ['*'];

    /**
     * @var array Fillable fields
     */
    protected $fillable = [];


    public $rules = [
        'category'   => 'required',
    ];

    /**
     * @var array Relations
     */
    public $hasOne = [];
    public $hasMany = [];
    public $belongsTo = [
        'category' => ['VM\Financial\Models\Category', 'order' => 'name', 'foreignKey' => 'category_id'],
        'validation_process' => ['VM\Financial\Models\ValidationProcess', 'order' => 'name', 'foreignKey' => 'validation_process_id'],
        'remb_user' => ['VM\Financial\Models\Member', 'foreignKey' => 'remb_user_id']
    ];
    public $belongsToMany = [];
    public $morphTo = [];
    public $morphOne = [];
    public $morphMany = [];
    public $attachOne = [];
    public $attachMany = [];

}
