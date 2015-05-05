<?php namespace VM\Financial\Controllers;

use BackendMenu;
use Backend\Classes\Controller;

/**
 * Validation Process Back-end Controller
 */
class ValidationProcess extends Controller
{
    public $implement = [
        'Backend.Behaviors.FormController',
        'Backend.Behaviors.ListController'
    ];

    public $formConfig = 'config_form.yaml';
    public $listConfig = 'config_list.yaml';

    public function __construct()
    {
        parent::__construct();

        BackendMenu::setContext('VM.Financial', 'financial', 'validationprocess');
    }
}