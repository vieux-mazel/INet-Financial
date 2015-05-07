<?php namespace VM\Financial\Components;

use Cms\Classes\ComponentBase;
use RainLab\User\Models\User as User;
use VM\Financial\Models\Member as RembUser;
use Flash;
use Auth;
class Member extends ComponentBase
{
    /**
     * User's Financial data via Member models
     * @var Member
     */
    public $financialData;

    /**
     * Check if user's data are complete
     * @var Member
     */
    public $datacomplete = true;

    public function componentDetails()
    {
        return [
            'name'        => 'Member Component',
            'description' => 'Formulaire pour compléter les données bancaires d\'une personne'
        ];
    }

    public function defineProperties()
    {
        return [];
    }

    public function onRun()
    {
        $this->addCss('assets/css/bootstrap.css');
        $this->addJs('assets/js/bootstrap.js');
        $this->addJs('assets/js/jquery.min.js');
        $this->setVariables();

    }
    public function setVariables()
    {
        $user = $this->user();
        $this->financialData = RembUser::where('email', '=', $user->email)->first();
        if(is_null($this->financialData)){
            $rb_user = new RembUser;
            $rb_user->username = $user->name;
            $rb_user->email = $user->email;
            $rb_user->user = User::where('email', '=', $user->email)->first();
            $rb_user->save();
            $this->financialData = RembUser::where('email', '=', $user->email)->first();
        }
        if(!$this->financialData->is_confirmed){
            $this->datacomplete = false;
        }

    }


    public function user()
    {
        if (!Auth::check())
            return null;

        return Auth::getUser();
    }
    /**
     * Check if a user exist (by checking email)
     * @return Flash Message and Update partial
     */
    public function onUpdate()
    {
        $username = post('username');
        $address = post('address');
        $npa = post('npa');
        $city = post('city');
        $ccp = post('ccp');

        // retrive logined in user's email
        $user = $this->user();
        $email = $user->email;
        // Check if user exist in Remboursement User model
        $rb_user = RembUser::where('email', '=', $email)->first();
        $user = User::where('email', '=', $email)->first();

        if(is_null($rb_user)){
            $rb_user = new RembUser;
        }
        $rb_user->username = $username;
        $rb_user->email = $email;
        $rb_user->ccp = $ccp;
        $rb_user->npa = $npa;
        $rb_user->is_confirmed = true;
        $rb_user->city = $city;
        $rb_user->address = $address;
        $rb_user->user = $user;
        $rb_user->save();
        Flash::success('Vos modifications ont étés enregistrées');
        $this->setVariables();
        return ['#userdetails_up' => $this->renderPartial('::default')];
    }


}
