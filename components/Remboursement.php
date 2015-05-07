<?php namespace VM\Financial\Components;

use Cms\Classes\ComponentBase;
use VM\Financial\Models\Remboursement as Rembdata;
use VM\Financial\Models\Category as Categories;
use VM\Financial\Models\ValidationProcess as ValidationProcess;
use RainLab\User\Models\Settings as UserSettings;
use RainLab\User\Models\User as User;
use VM\Financial\Models\Member as RembUser;
use System\Models\File as FileUpload;
use Flash;
use Auth;
use Redirect;
use Input;
use Request;
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
            'name'        => 'Formulaire de remboursement',
            'description' => 'Affiche un formulaire pour créer un nouveau remboursement'
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
        $this->page['url'] = Request::url() ."/"; # Hot fix to be removed has soon it's fixed on octobercms
        $this->categories = Categories::all();
        $this->validationprocess = ValidationProcess::all();

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

    public function onAdd()
    {
        $user = $this->user();
        $email = $user->email;
        #dump($email);
        // Get post value
        $amount = post('amount');
        $catid = post('category');
        $description = post('description');
        $processid = post('validationprocess');
        echo(post('justificatifs'));
        echo(Input::file('justificatifs'));
        // Create new Remboursement in database
        $currentRemb = new Rembdata;
        $currentRemb->description = $description;
        $currentRemb->amount = $amount;
        $currentRemb->remb_user = RembUser::where('email', '=', $email)->first();

        // associate Validation process
        $validationprocess = ValidationProcess::find($processid);
        $currentRemb->validation_process = $validationprocess;

        // associate category
        $category = Categories::find($catid);
        $currentRemb->category = $category;

        // Pièce jointe
        $file = new FileUpload;
        $file->data = Input::file('justificatifs');
        $file->save();

        $currentRemb->save();
        $currentRemb->justificatifs()->add($file);
        $currentRemb->save();

        // Save Remboursement
        return Redirect::to('payment/'.$currentRemb->slug);

    }

}
