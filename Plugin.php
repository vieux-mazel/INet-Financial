<?php namespace VM\Financial;
use Event;
use App;
use Backend;
use System\Classes\PluginBase;
use Illuminate\Foundation\AliasLoader;
use ShahiemSeymor\Roles\Models\UserPermission as UserPerms;
use RainLab\User\Controllers\Users as UsersController;
use RainLab\User\Models\User;
use VM\Financial\Models\Member;

/**
 * Financial Plugin Information File
 */
class Plugin extends PluginBase
{

    /**
     * Plugin dependancies
     * @var array
     */
    #public $require = ['RainLab.User','Shahiemseymor.Roles'];

    /**
     * Returns information about this plugin.
     *
     * @return array
     */
    public function pluginDetails()
    {
        return [
            'name'        => 'Financial',
            'description' => 'Plugin de gestion des remboursements pour le VM',
            'author'      => 'VM - IT Team',
            'icon'        => 'icon-leaf'
        ];
    }
    public function boot()
    {
        UserPerms::extend(function($model)
                {
                    $model->hasMany['validator'] = ['VM\Financial\Models\ValidationProcess'];
                    $model->hasMany['executor'] = ['VM\Financial\Models\ValidationProcess'];
                });
        User::extend(function($model) {
            $model->hasOne['payment_member'] = ['VM\Financial\Models\Member','user_id'];
        });

        UsersController::extendFormFields(function($widget, $model, $context) {
            if ($context != 'update') return;
            if (!Member::getFromUser($model)) return;

            $widget->addFields([
                'payment_member[username]' => [
                    'label'   => 'Nom de l\'utilisateur',
                    'tab'     => 'Financial',
                    'comment' => 'Commentaire...'
                ],
                 'payment_member[address]' => [
                     'label'   => 'Addresse',
                     'type'    => 'text',
                     'tab'     => 'Financial',
                     'span'    => 'auto',
                     'comment' => ' '
                 ],
                 'payment_member[npa]' => [
                     'label'   => 'NPA',
                     'type'    => 'text',
                     'tab'     => 'Financial',
                     'span'    => 'left',
                     'comment' => ' '
                 ],
                 'payment_member[city]' => [
                     'label'   => 'Ville',
                     'type'    => 'text',
                     'tab'     => 'Financial',
                     'span'    => 'right',
                     'comment' => ' '
                  ],
                 'payment_member[ccp]' => [
                     'label'   => 'CCP ou IBAN',
                     'type'    => 'text',
                     'tab'     => 'Financial',
                     'span'    => 'auto',
                     'comment' => ' '
                 ],
                 'payment_member[email]' => [
                     'label'   => 'Email',
                     'type'    => 'text',
                     'tab'     => 'Financial',
                     'span'    => 'auto',
                     'comment' => ' '
                 ]
                 ], 'primary');
             });

        UsersController::extendListColumns(function($widget, $model) {
            if (!$model instanceof \RainLab\User\Models\User) return;

            $widget->addColumns([
                'payment_member_username' => [
                    'label'      => 'Utilisateur',
                    'relation'   => 'payment_member',
                    'select'     => 'username',
                    'searchable' => false
                ]
            ]);
        });

    }
    public function registerComponents()
    {
        return[
            'VM\Financial\Components\Remboursement' => 'rembform',
            'VM\Financial\Components\Moderate' => 'rembmoderate',
            'VM\Financial\Components\Pay' => 'rembpay',
            'VM\Financial\Components\Payment' => 'paymentslug'
        ];
    }
    public function register()
    {
        $alias = AliasLoader::getInstance();
        $alias->alias('Auth', 'RainLab\User\Facades\Auth');

        App::singleton('user.auth', function() {
            return \RainLab\User\Classes\AuthManager::instance();
        });
    }
    public function registerNavigation()
    {
        return [
            'financial' => [
                'label' => 'Financial',
                'url' => Backend::url('vm/financial/category'),
                'icon' => 'icon-dollar',
                #'permissions' => ['rainlab.users.*'],
                'order' => 500,

                'sideMenu' => [
                    'category' => [
                        'label' => 'Category',
                        'icon' => 'icon-ticket',
                        'url' => Backend::url('vm/financial/category'),
                        #'permissions' => ['rainlab.users.access_users']
                    ],
                    'validationprocess' => [
                        'label' => 'Validation Process',
                        'icon' => 'icon-th',
                        'url' => Backend::url('vm/financial/validationprocess'),
                        #'permissions' => ['rainlab.users.access_users']
                    ]
                ]
            ]
        ];
   }


}
