<?php namespace VM\Financial\Models;

use Model;
use \October\Rain\Database\Traits\Validation;
use Illuminate\Support\Str as Str;
/**
 * Remboursement Model
 */
class Remboursement extends Model
{
    use \October\Rain\Database\Traits\Sluggable;

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

    /**
     * @var array Auto generated slug
     */
    protected $slugs = ['slug' => 'id'];

    public $rules = [
        'category'   => 'required',
    ];

    /**
     * @var array Relations
     */

    public $belongsTo = [
        'category' => ['VM\Financial\Models\Category', 'order' => 'name', 'foreignKey' => 'category_id'],
        'validation_process' => ['VM\Financial\Models\ValidationProcess', 'order' => 'name', 'foreignKey' => 'validation_process_id'],
        'remb_user' => ['VM\Financial\Models\Member', 'foreignKey' => 'remb_user_id']
    ];
    public $attachMany = [
        'justificatifs' => ['System\Models\File']
    ];

    public function beforeCreate()
    {
        // Generate a URL slug for this model
        $this->slug = Str::slug(Str::random(30));
    }

    public function getStatus(){
        switch ($this->status) {
            case 'new':
                return 'En attente de modération';
                break;
            case 'hold':
                return 'En attente de compléments';
                break;
            case 'moderated':
                return 'Accepté - versement prochainement';
                break;
            case 'done':
                return 'Terminé et payé';
                break;
        }
    }
    public function getStatusColor(){
        switch ($this->status) {
            case 'new':
                return 'warning';
                break;
            case 'hold':
                return 'danger';
                break;
            case 'moderated':
                return 'info';
                break;
            case 'done':
                return 'success';
                break;
        }
    }
}
