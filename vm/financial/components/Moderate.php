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

        $this->setVariables();
        $this->addCss('assets/css/main.css');
    }
    public function setVariables()
    {
        $this->paymentsModerated = Rembdata::all();
        #$this->paymentsModerated->each(function($model) {
        #    $model->justificatifs = $model->justificatifs->output();
        #});


        #echo $model->avatar->getPath();
    }

    public function onAttachment(){

        echo $attached_file->justificatifs->output();

    }
    /**
     * Change payment's status from 'new' to 'moderated'
     */
    public function onAccept()
    {
        $ValidatedRemb = Rembdata::find(post('id'));
        $ValidatedRemb->status = 'moderated';
        $ValidatedRemb->save();
        $this->paymentsModerated = Rembdata::all();
    }
    public function updateDefault()
    {
        $this->page['payments'] = Rembdata::all();
        return ['#default_container' => $this->renderPartial('list_payments')];
    }
    /**
     * Ask for more details about a payment by sending an email to the payment's owner
     */
    public function onAskMore(){
        $ValidatedRemb = Rembdata::find(post('id'));
        $ValidatedRemb->status = 'hold';
        $ValidatedRemb->save();
        $this->paymentsModerated = Rembdata::all();

    }
}
