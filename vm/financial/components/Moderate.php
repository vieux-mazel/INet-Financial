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
        $this->setVariables();
    }
    public function setVariables()
    {
        $this-> attachment 
    }
    /**
     * Change payment's status from 'new' to 'moderated'
     */
    public function onAccept()
    {

    }
    /**
     * Ask for more details about a payment by sending an email to the payment's owner
     */
    public function onAskMore(){


    }
}
