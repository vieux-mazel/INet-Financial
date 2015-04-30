<?php namespace VM\Financial\Components;

use Cms\Classes\ComponentBase;
use VM\Financial\Models\Remboursement as Rembdata;
class Moderate extends ComponentBase
{
    /**
     * Listes des payements à modérer
     * @var array
     */
    public $paymentsModerated;

    /**
     * Listes des payements à effectuer
     * @var array
     */
    public $paymentsPayed;

    public function componentDetails()
    {
        return [
            'name'        => 'Moderate Component',
            'description' => 'No description provided yet...'
        ];
    }

    public function defineProperties()
    {
        return [];
    }

    /**
     * Lauch on page run, can't run AJAX
     */
    public function onRun()
    {
        $this->paymentsModerated = Rembdata::all();

    }
}
