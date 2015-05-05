<?php namespace VM\Financial\Models;

use Model;
use Shahiemseymor\Roles\models\Groups;
/**
 * ValidationProcess Model
 */
class ValidationProcess extends Model
{

    /**
     * @var string The database table used by the model.
     */
    public $table = 'vm_financial_validation_processes';

    /**
     * @var array Guarded fields
     */
    protected $guarded = ['*'];

    /**
     * @var array Fillable fields
     */
    protected $fillable = [];

    /**
     * @var array Relations
     */
    public $hasOne = [];
    public $hasMany = [
        'categories' => ['VM\Financial\Models\Category'],
        'payments' => ['VM\Financial\Models\Remboursement']
    ];
    public $belongsTo = [
        'validator' => ['ShahiemSeymor\Roles\Models\UserPermission'],
        'executor' => ['ShahiemSeymor\Roles\Models\UserPermission']
    ];
    public $belongsToMany = [];
    public $morphTo = [];
    public $morphOne = [];
    public $morphMany = [];
    public $attachOne = [];
    public $attachMany = [];

}
