<?php namespace VM\Financial\Components;

use Cms\Classes\ComponentBase;
use VM\Financial\Models\Remboursement as Rembdata;
class Payment extends ComponentBase
{
    /**
     * Container for slugged VM\Models\Remboursement
     * @var VM\Models\Remboursement
     */
    public $payment;

    /**
     * Status in human readable format
     * @var string
     */
    public $status;

    /**
     * Status in human readable format
     * @var string
     */
    public $statuscolor;

    /**
     * Container for user VM\Models\Member
     * @var VM\Models\Member
     */
    public $user;

    /**
     * Check if payment exist to be able to return an error
     * @var boolean
     */
    public $exist = false;

    public function componentDetails()
    {
        return [
            'name'        => 'Slug Pour afficher le détail d\'un payement',
            'description' => 'No description provided yet...'
        ];
    }

    public function defineProperties()
    {
        return [
            'slug' => [
                'title'       => 'Slug',
                'description' => 'Slug du payement - laissez la valeur par défault',
                'default'     => '{{ :slug }}',
                'type'        => 'string',
            ]
        ];
    }
    public function onRun()
    {
        $this->payment = $this->getPayment();
    }


    public function getPayment()
    {
        if ($this->payment !== null)
            return $this->payment;

        if (!$slug = $this->property('slug'))
            return null;


        $this->payment = Rembdata::whereSlug($slug)->first();
        if(!is_null($this->payment)){
            $this->user = $this->payment->remb_user;
            $this->status = $this->payment->getStatus();
            $this->statuscolor = $this->payment->getStatusColor();
            $this->exist = true;
        }
        return $this->payment;
    }

    public function updateDefault()
    {
        $this->page['payments'] = Rembdata::all();
        return ['#default_container' => $this->renderPartial('list_payments')];
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


}
