<?php namespace VM\Financial\Components;

use Cms\Classes\ComponentBase;
use VM\Financial\Models\Remboursement as Rembdata;
use VM\Financial\Models\Category as Categories;
use VM\Financial\Models\ValidationProcess as ValidationProcess;
use RainLab\User\Models\Settings as UserSettings;
use RainLab\User\Models\User as User;
use VM\Financial\Models\Member as RembUser;
use Flash;
use Auth;
use Redirect;
class Remboursement extends ComponentBase
{

    /**
     * Catégories de payement
     * @var array
     */
    public $categories;

    /**
     * Validation process list
     * @var array
     */
    public $validationprocess;

    public function componentDetails()
    {
        return [
            'name'        => 'Remboursement Component',
            'description' => 'No description provided yet...'
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
        $this->categories = Categories::all();
        $this->validationprocess = ValidationProcess::all();
    }
    public function onAddRemb()
    {
        $description = post('description');
        $username = post('username');
        $email = post('email');
        $address = post('address');
        $npa = post('npa');
        $city = post('city');
        $ccp = post('ccp');
        $errorHappened = false;
        if (empty($username) || empty($email) || empty($address) || empty($npa) || empty($city) || empty($ccp)){
            $errorHappened = true;
            $flashMessae = '';
            if ( empty($username) )
                $flashMessae .= '<p>Merci d\'indiquer votre nom et prénom</p>';
            if ( empty($email) )
                $flashMessae .= '<p>Merci d\'indiquer votre email</p>';
            if ( empty($address) )
                $flashMessae .= '<p>Merci d\'indiquer votre addresse ';
            if ( empty($npa) )
                $flashMessae .= '<p>Merci d\'indiquer le NPA de votre ville ';
            if ( empty($city) )
                $flashMessae .= '<p>Merci d\'indiquer votre Ville ';
            if ( empty($ccp) )
                $flashMessae .= '<p>Merci d\'indiquer votre CCP ou votre IBAN ';
            if ($errorHappened)
                \Flash::warning($flashMessae);
            $this->page['errorHappened'] = $errorHappened;
        }
        if ($errorHappened)
            return false; #['error' => true, 'message' => 'One or more elements failed validation'];
        else
            $catid = post('category');
            $processid = post('validationprocess');
            $currentRemb = new Rembdata;
            $currentRemb->description = $description;

            // Associate and create user through member model
            $currentRemb->remb_user = $this->userExistOrCreate($email);
            #$currentRemb->username = $username;
            #$currentRemb->email = $email;
            #$currentRemb->address = $address;
            #$currentRemb->npa = $npa;
            #$currentRemb->city = $city;
            #$currentRemb->ccp = $ccp;
            #$currentRemb->description = $description;

            // associate Validation process
            $validationprocess = ValidationProcess::find($processid);
            $currentRemb->validation_process = $validationprocess;

            // associate category
            $category = Categories::find($catid);
            $currentRemb->category = $category;

            //Handle user registration

            // Save Remboursement
            $success = $currentRemb->save();
            $flashMessage = '<p>La demande de remboursement a été enregistrée </p>';
            \Flash::success($flashMessage);
            #$redirectUrl = $this->pageUrl($this->property('redirect'));
            #return Redirect::intended($redirectUrl);
            #return Redirect::to('test');
            return ['error' => false];

    }

    function onFlash(){
        return ['#flashMessages' => $this->renderPartial('flash-messages')];
    }

    /**
     * Check if a user exist (by checking email)
     * @param string $email user's email
     * @return Member
     */
    function userExistOrCreate($email)
    {
        $user = User::where('email', '=', $email)->get();
        if(!$user->isEmpty()){
            //TODO update field if changed
            return $user;
        }
        $username = post('username');
        $address = post('address');
        $npa = post('npa');
        $city = post('city');
        $ccp = post('ccp');

        /*
         * Register user
         */
         $password = str_random(20);
         $data = [ //data array which contain email & a random pass
             'email' => $email,
             'password' => $password,
             'password_confirmation' => $password
         ];

        $requireActivation = UserSettings::get('require_activation', true);
        $automaticActivation = UserSettings::get('activate_mode') == UserSettings::ACTIVATE_AUTO;
        $userActivation = UserSettings::get('activate_mode') == UserSettings::ACTIVATE_USER;
        $user = Auth::register($data, $automaticActivation);
        Auth::login($user);

        $rembUser = new RembUser;
        $rembUser->username = $username;
        $rembUser->email = $email;
        $rembUser->ccp = $ccp;
        $rembUser->npa = $npa;
        $rembUser->city = $city;
        $rembUser->address = $address;
        $rembUser->user = $user;
        $rembUser->save();

        return $user;
    }

}
