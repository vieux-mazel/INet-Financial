<?php namespace VM\Financial\Models;

use Str;
use Auth;
use Model;
use Carbon\Carbon;

/**
 * Member Model
 */
class Member extends Model
{
    use \October\Rain\Database\Traits\Sluggable;
    /**
     * @var string The database table used by the model.
     */
    public $table = 'vm_financial_members';

    /**
     * @var array Guarded fields
     */
    protected $guarded = ['*'];

    /**
     * @var array Fillable fields
     */
     protected $fillable = ['username'];
     /**
      * @var array The attributes that should be visible in arrays.
      */
     protected $visible = ['username', 'slug','id'];

     /**
      * @var array Auto generated slug
      */
     public $slugs = ['slug' => 'username'];

     public $dates = ['last_active_at'];

     /**
      * @var array Relations
      */
     public $belongsTo = [
         'user' => ['RainLab\User\Models\User' ,'user_id']
     ];

     public $hasMany = [
         'remboursements' => ['VM\Financial\Models\Remboursement', 'order' => 'created_at desc']
     ];
     public static function getFromUser($user = null)
     {
         if ($user === null)
             $user = Auth::getUser();

         if (!$user)
             return null;

         if (!$user->payment_member) {
             $generatedUsername = explode('@', $user->email);
             $generatedUsername = array_shift($generatedUsername);
             $generatedUsername = Str::limit($generatedUsername, 24, '') . $user->id;

             $member = new static;
             $member->user = $user;
             $member->username = $generatedUsername;
             #$member->save();

             #$user->payment_member = $member;
         }

         return $user->payment_member;
     }

     /**
      * Can the specified member edit this member
      * @param  self $member
      * @return bool
      */
     public function canEdit($member = null)
     {
         if (!$member)
             $member = Member::getFromUser();

         if (!$member)
             return false;

         if ($this->id == $member->id)
             return true;

         if ($member->is_moderator)
             return true;

         return false;
     }

     public function beforeSave()
     {
         /*
          * Reset the slug
          */
         if ($this->isDirty('username')) {
             $this->slug = null;
             $this->slugAttributes();
         }
     }

     /**
      * Returns true if this member is following this topic.
      * @param  Topic  $topic
      * @return boolean
      */
     public function isFollowing($topic)
     {
         return TopicFollow::check($topic, $this);
     }

     public function touchActivity()
     {
         return $this
             ->newQuery()
             ->where('id', $this->id)
             ->update(['last_active_at' => Carbon::now()]);
     }

     /**
      * Sets the "url" attribute with a URL to this object
      * @param string $pageName
      * @param Cms\Classes\Controller $controller
      */
     public function setUrl($pageName, $controller)
     {
         $params = [
             'id' => $this->id,
             'slug' => $this->slug,
         ];

         return $this->url = $controller->pageUrl($pageName, $params);
     }

     public function banMember()
     {
         $this->is_banned = ($this->is_banned == 1 ? 0 : 1);
         $this->save();
     }

 }
