


<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>Octobercms-Flexi-Contact-Plugin/bootstrap.js at master · LaminSanneh/Octobercms-Flexi-Contact-Plugin</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="LaminSanneh/Octobercms-Flexi-Contact-Plugin" name="twitter:title" /><meta content="Octobercms-Flexi-Contact-Plugin - A plugin for october cms used for embedding a contact form on your website" name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/846681?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/846681?v=3&amp;s=400" property="og:image" /><meta content="LaminSanneh/Octobercms-Flexi-Contact-Plugin" property="og:title" /><meta content="https://github.com/LaminSanneh/Octobercms-Flexi-Contact-Plugin" property="og:url" /><meta content="Octobercms-Flexi-Contact-Plugin - A plugin for october cms used for embedding a contact form on your website" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/NjUxNDcyNDo4YTc0ZjVkMGZmZjFiMjUwNDVkZjRjODRjNmVmOWZkMDoyYmY1NGE5OWQxZDU2YjI3YmFjMGNjNmE3NTg3NzU5MjkyNTJiNWRlYWYyMDRiMWRlYzdkMTlmNDViYzNhOWM3--ecf7182d7c1892f5773a3b10a9d912ece18cab53">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="86159BB7:69C9:15F3AE0:553F54D8" name="octolytics-dimension-request_id" /><meta content="6514724" name="octolytics-actor-id" /><meta content="sulazix" name="octolytics-actor-login" /><meta content="daae4eea173fbbd1016992f9642ecb487020a3d49c4348cd808d147a4ef673cb" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />
    <meta class="js-ga-set" name="dimension1" content="Logged In">
    <meta class="js-ga-set" name="dimension2" content="Header v3">
    <meta name="is-dotcom" content="true">
    <meta name="hostname" content="github.com">
    <meta name="user-login" content="sulazix">

    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="7biyJW/oZH6X1Mt2VnINZZ/mp9i0H+8ZhIHqya0HZkN/BZl+mikDS5CmdEHZ6eGOLAz7m2ofw0+J5mn7/6OP8w==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-99a212f30ce9bafd05712fa4c5c5de4e89c6c27396c34f6458dea3ea2a0b05b0.css" media="all" rel="stylesheet" />
    <link href="https://assets-cdn.github.com/assets/github2-b21c331cc5a9542882fc1f4e2cf08c371d7e52473ffc1017b2b64e3eccc953b8.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="721d20c617c5b2a4f61348c4564bf4c5">

      
  <meta name="description" content="Octobercms-Flexi-Contact-Plugin - A plugin for october cms used for embedding a contact form on your website">
  <meta name="go-import" content="github.com/LaminSanneh/Octobercms-Flexi-Contact-Plugin git https://github.com/LaminSanneh/Octobercms-Flexi-Contact-Plugin.git">

  <meta content="846681" name="octolytics-dimension-user_id" /><meta content="LaminSanneh" name="octolytics-dimension-user_login" /><meta content="19938786" name="octolytics-dimension-repository_id" /><meta content="LaminSanneh/Octobercms-Flexi-Contact-Plugin" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="19938786" name="octolytics-dimension-repository_network_root_id" /><meta content="LaminSanneh/Octobercms-Flexi-Contact-Plugin" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/LaminSanneh/Octobercms-Flexi-Contact-Plugin/commits/master.atom" rel="alternate" title="Recent Commits to Octobercms-Flexi-Contact-Plugin:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production linux vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      


        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/LaminSanneh/Octobercms-Flexi-Contact-Plugin/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/LaminSanneh/Octobercms-Flexi-Contact-Plugin/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item explore">
            <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
          </li>
            <li class="header-nav-item">
              <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
            </li>
            <li class="header-nav-item">
              <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
            </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
          </li>
      </ul>

      
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/sulazix" data-ga-click="Header, go to profile, text:username">
      <img alt="@sulazix" class="avatar" data-user="6514724" height="20" src="https://avatars0.githubusercontent.com/u/6514724?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">sulazix</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="/new" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu">
        
<li>
  <a href="/new" data-ga-click="Header, create new repository, icon:repo"><span class="octicon octicon-repo"></span> New repository</a>
</li>
<li>
  <a href="/organizations/new" data-ga-click="Header, create new organization, icon:organization"><span class="octicon octicon-organization"></span> New organization</a>
</li>


  <li class="dropdown-divider"></li>
  <li class="dropdown-header">
    <span title="LaminSanneh/Octobercms-Flexi-Contact-Plugin">This repository</span>
  </li>
    <li>
      <a href="/LaminSanneh/Octobercms-Flexi-Contact-Plugin/issues/new" data-ga-click="Header, create new issue, icon:issue"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>

      </ul>
    </div>
  </li>

  <li class="header-nav-item">
      <span 
        data-channel="notification-changed:sulazix"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:unread" data-hotkey="g n">
          <span class="mail-status unread"></span>
          <span class="octicon octicon-inbox"></span>
</a>  </span>

  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="OqVRxcDvQ3VEqf/eoRl2zNKU4xjNjNDV62HtxzTCDXfYxQgXaMvocBcwckpojKq/GoEa/baarK2kWzSgR6ghEQ==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>



    
  </div>
</div>

        

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

  <li>
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="To33sQU8cA63CxfJtQZ2FL68f1dxzy0IaQ79eNz6uYMVKvDzxM9k0EO6dtLtbFGT3KGJ+WuEgNXRXHsIWhlVTg==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="19938786" />

      <div class="select-menu js-menu-container js-select-menu">
        <a href="/LaminSanneh/Octobercms-Flexi-Contact-Plugin/subscription"
          class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
          data-ga-click="Repository, click Watch settings, action:blob#show">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>
        <a class="social-count js-social-count" href="/LaminSanneh/Octobercms-Flexi-Contact-Plugin/watchers">
          2
        </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/LaminSanneh/Octobercms-Flexi-Contact-Plugin/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="LjQO5dSGa2va3FZLhGHJRhgNSSIDECdrv1AkGY/d5pBENxDaO8+YOy5R4Y7P0zUlGqeDOr9lUA412VjA6av4eA==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar LaminSanneh/Octobercms-Flexi-Contact-Plugin"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/LaminSanneh/Octobercms-Flexi-Contact-Plugin/stargazers">
          5
        </a>
</form>
    <form accept-charset="UTF-8" action="/LaminSanneh/Octobercms-Flexi-Contact-Plugin/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="MFN6bDm2ay4r0H7T5c6akiPZ1w651v0cfLC+e3Q272PwSkKF8aRf0aJkyBwNbthOWEDYyYdW15dRroK54zkaiA==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star LaminSanneh/Octobercms-Flexi-Contact-Plugin"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/LaminSanneh/Octobercms-Flexi-Contact-Plugin/stargazers">
          5
        </a>
</form>  </div>

  </li>

        <li>
          <a href="#fork-destination-box" class="btn btn-sm btn-with-count"
              title="Fork your own copy of LaminSanneh/Octobercms-Flexi-Contact-Plugin to your account"
              aria-label="Fork your own copy of LaminSanneh/Octobercms-Flexi-Contact-Plugin to your account"
              rel="facebox"
              data-ga-click="Repository, show fork modal, action:blob#show; text:Fork">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/LaminSanneh/Octobercms-Flexi-Contact-Plugin/network" class="social-count">2</a>

          <div id="fork-destination-box" style="display: none;">
            <h2 class="facebox-header">Where should we fork this repository?</h2>
            <include-fragment src=""
                class="js-fork-select-fragment fork-select-fragment"
                data-url="/LaminSanneh/Octobercms-Flexi-Contact-Plugin/fork?fragment=1">
              <img alt="Loading" height="64" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-128-338974454bb5c32803e82f601beb051d373744b024fe8742a76009700fd7e033.gif" width="64" />
            </include-fragment>
          </div>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/LaminSanneh" class="url fn" itemprop="url" rel="author"><span itemprop="title">LaminSanneh</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/LaminSanneh/Octobercms-Flexi-Contact-Plugin" class="js-current-repository" data-pjax="#js-repo-pjax-container">Octobercms-Flexi-Contact-Plugin</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/LaminSanneh/Octobercms-Flexi-Contact-Plugin/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/LaminSanneh/Octobercms-Flexi-Contact-Plugin" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /LaminSanneh/Octobercms-Flexi-Contact-Plugin">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/LaminSanneh/Octobercms-Flexi-Contact-Plugin/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /LaminSanneh/Octobercms-Flexi-Contact-Plugin/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/LaminSanneh/Octobercms-Flexi-Contact-Plugin/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /LaminSanneh/Octobercms-Flexi-Contact-Plugin/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/LaminSanneh/Octobercms-Flexi-Contact-Plugin/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /LaminSanneh/Octobercms-Flexi-Contact-Plugin/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/LaminSanneh/Octobercms-Flexi-Contact-Plugin/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /LaminSanneh/Octobercms-Flexi-Contact-Plugin/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/LaminSanneh/Octobercms-Flexi-Contact-Plugin/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /LaminSanneh/Octobercms-Flexi-Contact-Plugin/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/LaminSanneh/Octobercms-Flexi-Contact-Plugin.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:LaminSanneh/Octobercms-Flexi-Contact-Plugin.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/LaminSanneh/Octobercms-Flexi-Contact-Plugin" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>, <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>, or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>




                <a href="/LaminSanneh/Octobercms-Flexi-Contact-Plugin/archive/master.zip"
                   class="btn btn-sm sidebar-button"
                   aria-label="Download the contents of LaminSanneh/Octobercms-Flexi-Contact-Plugin as a zip file"
                   title="Download the contents of LaminSanneh/Octobercms-Flexi-Contact-Plugin as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/LaminSanneh/Octobercms-Flexi-Contact-Plugin/blob/3788f1f160212a21bd991b358fbf694b9b07a123/assets/js/bootstrap.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:f222d648ab0f6e8044fe88d38a2ebef7 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/LaminSanneh/Octobercms-Flexi-Contact-Plugin/blob/master/assets/js/bootstrap.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/LaminSanneh/Octobercms-Flexi-Contact-Plugin/find/master"
          class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/LaminSanneh/Octobercms-Flexi-Contact-Plugin" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">Octobercms-Flexi-Contact-Plugin</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/LaminSanneh/Octobercms-Flexi-Contact-Plugin/tree/master/assets" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">assets</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/LaminSanneh/Octobercms-Flexi-Contact-Plugin/tree/master/assets/js" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator">/</span><strong class="final-path">bootstrap.js</strong>
  </div>
</div>

<include-fragment class="commit commit-loader file-history-tease" src="/LaminSanneh/Octobercms-Flexi-Contact-Plugin/contributors/master/assets/js/bootstrap.js">
  <div class="file-history-tease-header">
    Fetching contributors&hellip;
  </div>

  <div class="participation">
    <p class="loader-loading"><img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-EAF2F5-0bdc57d34b85c4a4de9d0d1db10cd70e8a95f33ff4f46c5a8c48b4bf4e5a9abe.gif" width="16" /></p>
    <p class="loader-error">Cannot retrieve contributors at this time</p>
  </div>
</include-fragment>
<div class="file">
  <div class="file-header">
    <div class="file-actions">

      <div class="btn-group">
        <a href="/LaminSanneh/Octobercms-Flexi-Contact-Plugin/raw/master/assets/js/bootstrap.js" class="btn btn-sm " id="raw-url">Raw</a>
          <a href="/LaminSanneh/Octobercms-Flexi-Contact-Plugin/blame/master/assets/js/bootstrap.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
        <a href="/LaminSanneh/Octobercms-Flexi-Contact-Plugin/commits/master/assets/js/bootstrap.js" class="btn btn-sm " rel="nofollow">History</a>
      </div>


            <form accept-charset="UTF-8" action="/LaminSanneh/Octobercms-Flexi-Contact-Plugin/edit/master/assets/js/bootstrap.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="4kSzZoSh8oVXnPavmU8mc4rA352PcsvID7gwRDW3s6M2yTt5ON7SHK8gCK8J0oSDrP3WoPsjQ6KVC9hFIka02g==" /></div>
              <button class="octicon-btn tooltipped tooltipped-n" type="submit" aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
                <span class="octicon octicon-pencil"></span>
              </button>
</form>
          <form accept-charset="UTF-8" action="/LaminSanneh/Octobercms-Flexi-Contact-Plugin/delete/master/assets/js/bootstrap.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="g5XQh4J+lJtf9vM74/aBJ30kSiSHpi6TW+zK16XxHbuDSPG3Ja1sYg9wJ0gokBloRj7+g2xLI+EGBv9FgFI2ng==" /></div>
            <button class="octicon-btn octicon-btn-danger tooltipped tooltipped-n" type="submit" aria-label="Fork this project and delete this file" data-disable-with>
              <span class="octicon octicon-trashcan"></span>
            </button>
</form>    </div>

    <div class="file-info">
        <span class="file-mode" title="File mode">executable file</span>
        <span class="file-info-divider"></span>
        6 lines (6 sloc)
        <span class="file-info-divider"></span>
      29.11 kb
    </div>
  </div>
  
  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*!</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Bootstrap v3.1.1 (http://getbootstrap.com)</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Copyright 2011-2014 Twitter, Inc.</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">if(&quot;undefined&quot;==typeof jQuery)throw new Error(&quot;Bootstrap&#39;s JavaScript requires jQuery&quot;);+function(a){&quot;use strict&quot;;function b(){var a=document.createElement(&quot;bootstrap&quot;),b={WebkitTransition:&quot;webkitTransitionEnd&quot;,MozTransition:&quot;transitionend&quot;,OTransition:&quot;oTransitionEnd otransitionend&quot;,transition:&quot;transitionend&quot;};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){&quot;use strict&quot;;var b=&#39;[data-dismiss=&quot;alert&quot;]&#39;,c=function(c){a(c).on(&quot;click&quot;,b,this.close)};c.prototype.close=function(b){function c(){f.trigger(&quot;closed.bs.alert&quot;).remove()}var d=a(this),e=d.attr(&quot;data-target&quot;);e||(e=d.attr(&quot;href&quot;),e=e&amp;&amp;e.replace(/.*(?=#[^\s]*$)/,&quot;&quot;));var f=a(e);b&amp;&amp;b.preventDefault(),f.length||(f=d.hasClass(&quot;alert&quot;)?d:d.parent()),f.trigger(b=a.Event(&quot;close.bs.alert&quot;)),b.isDefaultPrevented()||(f.removeClass(&quot;in&quot;),a.support.transition&amp;&amp;f.hasClass(&quot;fade&quot;)?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data(&quot;bs.alert&quot;);e||d.data(&quot;bs.alert&quot;,e=new c(this)),&quot;string&quot;==typeof b&amp;&amp;e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on(&quot;click.bs.alert.data-api&quot;,b,c.prototype.close)}(jQuery),+function(a){&quot;use strict&quot;;var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:&quot;loading...&quot;},b.prototype.setState=function(b){var c=&quot;disabled&quot;,d=this.$element,e=d.is(&quot;input&quot;)?&quot;val&quot;:&quot;html&quot;,f=d.data();b+=&quot;Text&quot;,f.resetText||d.data(&quot;resetText&quot;,d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){&quot;loadingText&quot;==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&amp;&amp;(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest(&#39;[data-toggle=&quot;buttons&quot;]&#39;);if(b.length){var c=this.$element.find(&quot;input&quot;);&quot;radio&quot;==c.prop(&quot;type&quot;)&amp;&amp;(c.prop(&quot;checked&quot;)&amp;&amp;this.$element.hasClass(&quot;active&quot;)?a=!1:b.find(&quot;.active&quot;).removeClass(&quot;active&quot;)),a&amp;&amp;c.prop(&quot;checked&quot;,!this.$element.hasClass(&quot;active&quot;)).trigger(&quot;change&quot;)}a&amp;&amp;this.$element.toggleClass(&quot;active&quot;)};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data(&quot;bs.button&quot;),f=&quot;object&quot;==typeof c&amp;&amp;c;e||d.data(&quot;bs.button&quot;,e=new b(this,f)),&quot;toggle&quot;==c?e.toggle():c&amp;&amp;e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on(&quot;click.bs.button.data-api&quot;,&quot;[data-toggle^=button]&quot;,function(b){var c=a(b.target);c.hasClass(&quot;btn&quot;)||(c=c.closest(&quot;.btn&quot;)),c.button(&quot;toggle&quot;),b.preventDefault()})}(jQuery),+function(a){&quot;use strict&quot;;var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(&quot;.carousel-indicators&quot;),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,&quot;hover&quot;==this.options.pause&amp;&amp;this.$element.on(&quot;mouseenter&quot;,a.proxy(this.pause,this)).on(&quot;mouseleave&quot;,a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:&quot;hover&quot;,wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&amp;&amp;clearInterval(this.interval),this.options.interval&amp;&amp;!this.paused&amp;&amp;(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(&quot;.item.active&quot;),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b&gt;this.$items.length-1||0&gt;b?void 0:this.sliding?this.$element.one(&quot;slid.bs.carousel&quot;,function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b&gt;d?&quot;next&quot;:&quot;prev&quot;,a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(&quot;.next, .prev&quot;).length&amp;&amp;a.support.transition&amp;&amp;(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide(&quot;next&quot;)},b.prototype.prev=function(){return this.sliding?void 0:this.slide(&quot;prev&quot;)},b.prototype.slide=function(b,c){var d=this.$element.find(&quot;.item.active&quot;),e=c||d[b](),f=this.interval,g=&quot;next&quot;==b?&quot;left&quot;:&quot;right&quot;,h=&quot;next&quot;==b?&quot;first&quot;:&quot;last&quot;,i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(&quot;.item&quot;)[h]()}if(e.hasClass(&quot;active&quot;))return this.sliding=!1;var j=a.Event(&quot;slide.bs.carousel&quot;,{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&amp;&amp;this.pause(),this.$indicators.length&amp;&amp;(this.$indicators.find(&quot;.active&quot;).removeClass(&quot;active&quot;),this.$element.one(&quot;slid.bs.carousel&quot;,function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&amp;&amp;b.addClass(&quot;active&quot;)})),a.support.transition&amp;&amp;this.$element.hasClass(&quot;slide&quot;)?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(&quot; &quot;)).addClass(&quot;active&quot;),d.removeClass([&quot;active&quot;,g].join(&quot; &quot;)),i.sliding=!1,setTimeout(function(){i.$element.trigger(&quot;slid.bs.carousel&quot;)},0)}).emulateTransitionEnd(1e3*d.css(&quot;transition-duration&quot;).slice(0,-1))):(d.removeClass(&quot;active&quot;),e.addClass(&quot;active&quot;),this.sliding=!1,this.$element.trigger(&quot;slid.bs.carousel&quot;)),f&amp;&amp;this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data(&quot;bs.carousel&quot;),f=a.extend({},b.DEFAULTS,d.data(),&quot;object&quot;==typeof c&amp;&amp;c),g=&quot;string&quot;==typeof c?c:f.slide;e||d.data(&quot;bs.carousel&quot;,e=new b(this,f)),&quot;number&quot;==typeof c?e.to(c):g?e[g]():f.interval&amp;&amp;e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on(&quot;click.bs.carousel.data-api&quot;,&quot;[data-slide], [data-slide-to]&quot;,function(b){var c,d=a(this),e=a(d.attr(&quot;data-target&quot;)||(c=d.attr(&quot;href&quot;))&amp;&amp;c.replace(/.*(?=#[^\s]+$)/,&quot;&quot;)),f=a.extend({},e.data(),d.data()),g=d.attr(&quot;data-slide-to&quot;);g&amp;&amp;(f.interval=!1),e.carousel(f),(g=d.attr(&quot;data-slide-to&quot;))&amp;&amp;e.data(&quot;bs.carousel&quot;).to(g),b.preventDefault()}),a(window).on(&quot;load&quot;,function(){a(&#39;[data-ride=&quot;carousel&quot;]&#39;).each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){&quot;use strict&quot;;var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&amp;&amp;(this.$parent=a(this.options.parent)),this.options.toggle&amp;&amp;this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass(&quot;width&quot;);return a?&quot;width&quot;:&quot;height&quot;},b.prototype.show=function(){if(!this.transitioning&amp;&amp;!this.$element.hasClass(&quot;in&quot;)){var b=a.Event(&quot;show.bs.collapse&quot;);if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&amp;&amp;this.$parent.find(&quot;&gt; .panel &gt; .in&quot;);if(c&amp;&amp;c.length){var d=c.data(&quot;bs.collapse&quot;);if(d&amp;&amp;d.transitioning)return;c.collapse(&quot;hide&quot;),d||c.data(&quot;bs.collapse&quot;,null)}var e=this.dimension();this.$element.removeClass(&quot;collapse&quot;).addClass(&quot;collapsing&quot;)[e](0),this.transitioning=1;var f=function(){this.$element.removeClass(&quot;collapsing&quot;).addClass(&quot;collapse in&quot;)[e](&quot;auto&quot;),this.transitioning=0,this.$element.trigger(&quot;shown.bs.collapse&quot;)};if(!a.support.transition)return f.call(this);var g=a.camelCase([&quot;scroll&quot;,e].join(&quot;-&quot;));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&amp;&amp;this.$element.hasClass(&quot;in&quot;)){var b=a.Event(&quot;hide.bs.collapse&quot;);if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass(&quot;collapsing&quot;).removeClass(&quot;collapse&quot;).removeClass(&quot;in&quot;),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger(&quot;hidden.bs.collapse&quot;).removeClass(&quot;collapsing&quot;).addClass(&quot;collapse&quot;)};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass(&quot;in&quot;)?&quot;hide&quot;:&quot;show&quot;]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data(&quot;bs.collapse&quot;),f=a.extend({},b.DEFAULTS,d.data(),&quot;object&quot;==typeof c&amp;&amp;c);!e&amp;&amp;f.toggle&amp;&amp;&quot;show&quot;==c&amp;&amp;(c=!c),e||d.data(&quot;bs.collapse&quot;,e=new b(this,f)),&quot;string&quot;==typeof c&amp;&amp;e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on(&quot;click.bs.collapse.data-api&quot;,&quot;[data-toggle=collapse]&quot;,function(b){var c,d=a(this),e=d.attr(&quot;data-target&quot;)||b.preventDefault()||(c=d.attr(&quot;href&quot;))&amp;&amp;c.replace(/.*(?=#[^\s]+$)/,&quot;&quot;),f=a(e),g=f.data(&quot;bs.collapse&quot;),h=g?&quot;toggle&quot;:d.data(),i=d.attr(&quot;data-parent&quot;),j=i&amp;&amp;a(i);g&amp;&amp;g.transitioning||(j&amp;&amp;j.find(&#39;[data-toggle=collapse][data-parent=&quot;&#39;+i+&#39;&quot;]&#39;).not(d).addClass(&quot;collapsed&quot;),d[f.hasClass(&quot;in&quot;)?&quot;addClass&quot;:&quot;removeClass&quot;](&quot;collapsed&quot;)),f.collapse(h)})}(jQuery),+function(a){&quot;use strict&quot;;function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass(&quot;open&quot;)&amp;&amp;(d.trigger(b=a.Event(&quot;hide.bs.dropdown&quot;,e)),b.isDefaultPrevented()||d.removeClass(&quot;open&quot;).trigger(&quot;hidden.bs.dropdown&quot;,e))})}function c(b){var c=b.attr(&quot;data-target&quot;);c||(c=b.attr(&quot;href&quot;),c=c&amp;&amp;/#[A-Za-z]/.test(c)&amp;&amp;c.replace(/.*(?=#[^\s]*$)/,&quot;&quot;));var d=c&amp;&amp;a(c);return d&amp;&amp;d.length?d:b.parent()}var d=&quot;.dropdown-backdrop&quot;,e=&quot;[data-toggle=dropdown]&quot;,f=function(b){a(b).on(&quot;click.bs.dropdown&quot;,this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(&quot;.disabled, :disabled&quot;)){var f=c(e),g=f.hasClass(&quot;open&quot;);if(b(),!g){&quot;ontouchstart&quot;in document.documentElement&amp;&amp;!f.closest(&quot;.navbar-nav&quot;).length&amp;&amp;a(&#39;&lt;div class=&quot;dropdown-backdrop&quot;/&gt;&#39;).insertAfter(a(this)).on(&quot;click&quot;,b);var h={relatedTarget:this};if(f.trigger(d=a.Event(&quot;show.bs.dropdown&quot;,h)),d.isDefaultPrevented())return;f.toggleClass(&quot;open&quot;).trigger(&quot;shown.bs.dropdown&quot;,h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(&quot;.disabled, :disabled&quot;)){var f=c(d),g=f.hasClass(&quot;open&quot;);if(!g||g&amp;&amp;27==b.keyCode)return 27==b.which&amp;&amp;f.find(e).focus(),d.click();var h=&quot; li:not(.divider):visible a&quot;,i=f.find(&quot;[role=menu]&quot;+h+&quot;, [role=listbox]&quot;+h);if(i.length){var j=i.index(i.filter(&quot;:focus&quot;));38==b.keyCode&amp;&amp;j&gt;0&amp;&amp;j--,40==b.keyCode&amp;&amp;j&lt;i.length-1&amp;&amp;j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data(&quot;bs.dropdown&quot;);d||c.data(&quot;bs.dropdown&quot;,d=new f(this)),&quot;string&quot;==typeof b&amp;&amp;d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on(&quot;click.bs.dropdown.data-api&quot;,b).on(&quot;click.bs.dropdown.data-api&quot;,&quot;.dropdown form&quot;,function(a){a.stopPropagation()}).on(&quot;click.bs.dropdown.data-api&quot;,e,f.prototype.toggle).on(&quot;keydown.bs.dropdown.data-api&quot;,e+&quot;, [role=menu], [role=listbox]&quot;,f.prototype.keydown)}(jQuery),+function(a){&quot;use strict&quot;;var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&amp;&amp;this.$element.find(&quot;.modal-content&quot;).load(this.options.remote,a.proxy(function(){this.$element.trigger(&quot;loaded.bs.modal&quot;)},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?&quot;hide&quot;:&quot;show&quot;](a)},b.prototype.show=function(b){var c=this,d=a.Event(&quot;show.bs.modal&quot;,{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on(&quot;click.dismiss.bs.modal&quot;,&#39;[data-dismiss=&quot;modal&quot;]&#39;,a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&amp;&amp;c.$element.hasClass(&quot;fade&quot;);c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&amp;&amp;c.$element[0].offsetWidth,c.$element.addClass(&quot;in&quot;).attr(&quot;aria-hidden&quot;,!1),c.enforceFocus();var e=a.Event(&quot;shown.bs.modal&quot;,{relatedTarget:b});d?c.$element.find(&quot;.modal-dialog&quot;).one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&amp;&amp;b.preventDefault(),b=a.Event(&quot;hide.bs.modal&quot;),this.$element.trigger(b),this.isShown&amp;&amp;!b.isDefaultPrevented()&amp;&amp;(this.isShown=!1,this.escape(),a(document).off(&quot;focusin.bs.modal&quot;),this.$element.removeClass(&quot;in&quot;).attr(&quot;aria-hidden&quot;,!0).off(&quot;click.dismiss.bs.modal&quot;),a.support.transition&amp;&amp;this.$element.hasClass(&quot;fade&quot;)?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off(&quot;focusin.bs.modal&quot;).on(&quot;focusin.bs.modal&quot;,a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&amp;&amp;this.options.keyboard?this.$element.on(&quot;keyup.dismiss.bs.modal&quot;,a.proxy(function(a){27==a.which&amp;&amp;this.hide()},this)):this.isShown||this.$element.off(&quot;keyup.dismiss.bs.modal&quot;)},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger(&quot;hidden.bs.modal&quot;)})},b.prototype.removeBackdrop=function(){this.$backdrop&amp;&amp;this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass(&quot;fade&quot;)?&quot;fade&quot;:&quot;&quot;;if(this.isShown&amp;&amp;this.options.backdrop){var d=a.support.transition&amp;&amp;c;if(this.$backdrop=a(&#39;&lt;div class=&quot;modal-backdrop &#39;+c+&#39;&quot; /&gt;&#39;).appendTo(document.body),this.$element.on(&quot;click.dismiss.bs.modal&quot;,a.proxy(function(a){a.target===a.currentTarget&amp;&amp;(&quot;static&quot;==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&amp;&amp;this.$backdrop[0].offsetWidth,this.$backdrop.addClass(&quot;in&quot;),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&amp;&amp;this.$backdrop?(this.$backdrop.removeClass(&quot;in&quot;),a.support.transition&amp;&amp;this.$element.hasClass(&quot;fade&quot;)?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&amp;&amp;b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data(&quot;bs.modal&quot;),g=a.extend({},b.DEFAULTS,e.data(),&quot;object&quot;==typeof c&amp;&amp;c);f||e.data(&quot;bs.modal&quot;,f=new b(this,g)),&quot;string&quot;==typeof c?f[c](d):g.show&amp;&amp;f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on(&quot;click.bs.modal.data-api&quot;,&#39;[data-toggle=&quot;modal&quot;]&#39;,function(b){var c=a(this),d=c.attr(&quot;href&quot;),e=a(c.attr(&quot;data-target&quot;)||d&amp;&amp;d.replace(/.*(?=#[^\s]+$)/,&quot;&quot;)),f=e.data(&quot;bs.modal&quot;)?&quot;toggle&quot;:a.extend({remote:!/#/.test(d)&amp;&amp;d},e.data(),c.data());c.is(&quot;a&quot;)&amp;&amp;b.preventDefault(),e.modal(f,this).one(&quot;hide&quot;,function(){c.is(&quot;:visible&quot;)&amp;&amp;c.focus()})}),a(document).on(&quot;show.bs.modal&quot;,&quot;.modal&quot;,function(){a(document.body).addClass(&quot;modal-open&quot;)}).on(&quot;hidden.bs.modal&quot;,&quot;.modal&quot;,function(){a(document.body).removeClass(&quot;modal-open&quot;)})}(jQuery),+function(a){&quot;use strict&quot;;var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init(&quot;tooltip&quot;,a,b)};b.DEFAULTS={animation:!0,placement:&quot;top&quot;,selector:!1,template:&#39;&lt;div class=&quot;tooltip&quot;&gt;&lt;div class=&quot;tooltip-arrow&quot;&gt;&lt;/div&gt;&lt;div class=&quot;tooltip-inner&quot;&gt;&lt;/div&gt;&lt;/div&gt;&#39;,trigger:&quot;hover focus&quot;,title:&quot;&quot;,delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(&quot; &quot;),f=e.length;f--;){var g=e[f];if(&quot;click&quot;==g)this.$element.on(&quot;click.&quot;+this.type,this.options.selector,a.proxy(this.toggle,this));else if(&quot;manual&quot;!=g){var h=&quot;hover&quot;==g?&quot;mouseenter&quot;:&quot;focusin&quot;,i=&quot;hover&quot;==g?&quot;mouseleave&quot;:&quot;focusout&quot;;this.$element.on(h+&quot;.&quot;+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+&quot;.&quot;+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:&quot;manual&quot;,selector:&quot;&quot;}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&amp;&amp;&quot;number&quot;==typeof b.delay&amp;&amp;(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&amp;&amp;a.each(this._options,function(a,d){c[a]!=d&amp;&amp;(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data(&quot;bs.&quot;+this.type);return clearTimeout(c.timeout),c.hoverState=&quot;in&quot;,c.options.delay&amp;&amp;c.options.delay.show?void(c.timeout=setTimeout(function(){&quot;in&quot;==c.hoverState&amp;&amp;c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data(&quot;bs.&quot;+this.type);return clearTimeout(c.timeout),c.hoverState=&quot;out&quot;,c.options.delay&amp;&amp;c.options.delay.hide?void(c.timeout=setTimeout(function(){&quot;out&quot;==c.hoverState&amp;&amp;c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event(&quot;show.bs.&quot;+this.type);if(this.hasContent()&amp;&amp;this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&amp;&amp;d.addClass(&quot;fade&quot;);var e=&quot;function&quot;==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&amp;&amp;(e=e.replace(f,&quot;&quot;)||&quot;top&quot;),d.detach().css({top:0,left:0,display:&quot;block&quot;}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n=&quot;body&quot;==this.options.container?window.innerWidth:k.outerWidth(),o=&quot;body&quot;==this.options.container?window.innerHeight:k.outerHeight(),p=&quot;body&quot;==this.options.container?0:k.offset().left;e=&quot;bottom&quot;==e&amp;&amp;h.top+h.height+j-m&gt;o?&quot;top&quot;:&quot;top&quot;==e&amp;&amp;h.top-m-j&lt;0?&quot;bottom&quot;:&quot;right&quot;==e&amp;&amp;h.right+i&gt;n?&quot;left&quot;:&quot;left&quot;==e&amp;&amp;h.left-i&lt;p?&quot;right&quot;:e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger(&quot;shown.bs.&quot;+c.type)};a.support.transition&amp;&amp;this.$tip.hasClass(&quot;fade&quot;)?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css(&quot;margin-top&quot;),10),i=parseInt(e.css(&quot;margin-left&quot;),10);isNaN(h)&amp;&amp;(h=0),isNaN(i)&amp;&amp;(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass(&quot;in&quot;);var j=e[0].offsetWidth,k=e[0].offsetHeight;if(&quot;top&quot;==c&amp;&amp;k!=g&amp;&amp;(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left&lt;0&amp;&amp;(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,&quot;left&quot;)}else this.replaceArrow(k-g,k,&quot;top&quot;);d&amp;&amp;e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+&quot;%&quot;:&quot;&quot;)},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(&quot;.tooltip-inner&quot;)[this.options.html?&quot;html&quot;:&quot;text&quot;](b),a.removeClass(&quot;fade in top bottom left right&quot;)},b.prototype.hide=function(){function b(){&quot;in&quot;!=c.hoverState&amp;&amp;d.detach(),c.$element.trigger(&quot;hidden.bs.&quot;+c.type)}var c=this,d=this.tip(),e=a.Event(&quot;hide.bs.&quot;+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass(&quot;in&quot;),a.support.transition&amp;&amp;this.$tip.hasClass(&quot;fade&quot;)?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr(&quot;title&quot;)||&quot;string&quot;!=typeof a.attr(&quot;data-original-title&quot;))&amp;&amp;a.attr(&quot;data-original-title&quot;,a.attr(&quot;title&quot;)||&quot;&quot;).attr(&quot;title&quot;,&quot;&quot;)},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},&quot;function&quot;==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return&quot;bottom&quot;==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:&quot;top&quot;==a?{top:b.top-d,left:b.left+b.width/2-c/2}:&quot;left&quot;==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr(&quot;data-original-title&quot;)||(&quot;function&quot;==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(&quot;.tooltip-arrow&quot;)},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data(&quot;bs.&quot;+this.type):this;c.tip().hasClass(&quot;in&quot;)?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off(&quot;.&quot;+this.type).removeData(&quot;bs.&quot;+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data(&quot;bs.tooltip&quot;),f=&quot;object&quot;==typeof c&amp;&amp;c;(e||&quot;destroy&quot;!=c)&amp;&amp;(e||d.data(&quot;bs.tooltip&quot;,e=new b(this,f)),&quot;string&quot;==typeof c&amp;&amp;e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){&quot;use strict&quot;;var b=function(a,b){this.init(&quot;popover&quot;,a,b)};if(!a.fn.tooltip)throw new Error(&quot;Popover requires tooltip.js&quot;);b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:&quot;right&quot;,trigger:&quot;click&quot;,content:&quot;&quot;,template:&#39;&lt;div class=&quot;popover&quot;&gt;&lt;div class=&quot;arrow&quot;&gt;&lt;/div&gt;&lt;h3 class=&quot;popover-title&quot;&gt;&lt;/h3&gt;&lt;div class=&quot;popover-content&quot;&gt;&lt;/div&gt;&lt;/div&gt;&#39;}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(&quot;.popover-title&quot;)[this.options.html?&quot;html&quot;:&quot;text&quot;](b),a.find(&quot;.popover-content&quot;)[this.options.html?&quot;string&quot;==typeof c?&quot;html&quot;:&quot;append&quot;:&quot;text&quot;](c),a.removeClass(&quot;fade top bottom left right in&quot;),a.find(&quot;.popover-title&quot;).html()||a.find(&quot;.popover-title&quot;).hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr(&quot;data-content&quot;)||(&quot;function&quot;==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(&quot;.arrow&quot;)},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data(&quot;bs.popover&quot;),f=&quot;object&quot;==typeof c&amp;&amp;c;(e||&quot;destroy&quot;!=c)&amp;&amp;(e||d.data(&quot;bs.popover&quot;,e=new b(this,f)),&quot;string&quot;==typeof c&amp;&amp;e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){&quot;use strict&quot;;function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is(&quot;body&quot;)?window:c),this.$body=a(&quot;body&quot;),this.$scrollElement=this.$element.on(&quot;scroll.bs.scroll-spy.data-api&quot;,f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr(&quot;href&quot;))&amp;&amp;e.replace(/.*(?=#[^\s]+$)/,&quot;&quot;)||&quot;&quot;)+&quot; .nav li &gt; a&quot;,this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?&quot;offset&quot;:&quot;position&quot;;this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data(&quot;target&quot;)||d.attr(&quot;href&quot;),f=/^#./.test(e)&amp;&amp;a(e);return f&amp;&amp;f.length&amp;&amp;f.is(&quot;:visible&quot;)&amp;&amp;[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&amp;&amp;c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b&gt;=d)return g!=(a=f.last()[0])&amp;&amp;this.activate(a);if(g&amp;&amp;b&lt;=e[0])return g!=(a=f[0])&amp;&amp;this.activate(a);for(a=e.length;a--;)g!=f[a]&amp;&amp;b&gt;=e[a]&amp;&amp;(!e[a+1]||b&lt;=e[a+1])&amp;&amp;this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,&quot;.active&quot;).removeClass(&quot;active&quot;);var c=this.selector+&#39;[data-target=&quot;&#39;+b+&#39;&quot;],&#39;+this.selector+&#39;[href=&quot;&#39;+b+&#39;&quot;]&#39;,d=a(c).parents(&quot;li&quot;).addClass(&quot;active&quot;);d.parent(&quot;.dropdown-menu&quot;).length&amp;&amp;(d=d.closest(&quot;li.dropdown&quot;).addClass(&quot;active&quot;)),d.trigger(&quot;activate.bs.scrollspy&quot;)};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data(&quot;bs.scrollspy&quot;),f=&quot;object&quot;==typeof c&amp;&amp;c;e||d.data(&quot;bs.scrollspy&quot;,e=new b(this,f)),&quot;string&quot;==typeof c&amp;&amp;e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on(&quot;load&quot;,function(){a(&#39;[data-spy=&quot;scroll&quot;]&#39;).each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){&quot;use strict&quot;;var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest(&quot;ul:not(.dropdown-menu)&quot;),d=b.data(&quot;target&quot;);if(d||(d=b.attr(&quot;href&quot;),d=d&amp;&amp;d.replace(/.*(?=#[^\s]*$)/,&quot;&quot;)),!b.parent(&quot;li&quot;).hasClass(&quot;active&quot;)){var e=c.find(&quot;.active:last a&quot;)[0],f=a.Event(&quot;show.bs.tab&quot;,{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent(&quot;li&quot;),c),this.activate(g,g.parent(),function(){b.trigger({type:&quot;shown.bs.tab&quot;,relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass(&quot;active&quot;).find(&quot;&gt; .dropdown-menu &gt; .active&quot;).removeClass(&quot;active&quot;),b.addClass(&quot;active&quot;),g?(b[0].offsetWidth,b.addClass(&quot;in&quot;)):b.removeClass(&quot;fade&quot;),b.parent(&quot;.dropdown-menu&quot;)&amp;&amp;b.closest(&quot;li.dropdown&quot;).addClass(&quot;active&quot;),d&amp;&amp;d()}var f=c.find(&quot;&gt; .active&quot;),g=d&amp;&amp;a.support.transition&amp;&amp;f.hasClass(&quot;fade&quot;);g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass(&quot;in&quot;)};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data(&quot;bs.tab&quot;);e||d.data(&quot;bs.tab&quot;,e=new b(this)),&quot;string&quot;==typeof c&amp;&amp;e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on(&quot;click.bs.tab.data-api&quot;,&#39;[data-toggle=&quot;tab&quot;], [data-toggle=&quot;pill&quot;]&#39;,function(b){b.preventDefault(),a(this).tab(&quot;show&quot;)})}(jQuery),+function(a){&quot;use strict&quot;;var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on(&quot;scroll.bs.affix.data-api&quot;,a.proxy(this.checkPosition,this)).on(&quot;click.bs.affix.data-api&quot;,a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET=&quot;affix affix-top affix-bottom&quot;,b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass(&quot;affix&quot;);var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(&quot;:visible&quot;)){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;&quot;top&quot;==this.affixed&amp;&amp;(e.top+=d),&quot;object&quot;!=typeof f&amp;&amp;(h=g=f),&quot;function&quot;==typeof g&amp;&amp;(g=f.top(this.$element)),&quot;function&quot;==typeof h&amp;&amp;(h=f.bottom(this.$element));var i=null!=this.unpin&amp;&amp;d+this.unpin&lt;=e.top?!1:null!=h&amp;&amp;e.top+this.$element.height()&gt;=c-h?&quot;bottom&quot;:null!=g&amp;&amp;g&gt;=d?&quot;top&quot;:!1;if(this.affixed!==i){this.unpin&amp;&amp;this.$element.css(&quot;top&quot;,&quot;&quot;);var j=&quot;affix&quot;+(i?&quot;-&quot;+i:&quot;&quot;),k=a.Event(j+&quot;.bs.affix&quot;);this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin=&quot;bottom&quot;==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace(&quot;affix&quot;,&quot;affixed&quot;))),&quot;bottom&quot;==i&amp;&amp;this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data(&quot;bs.affix&quot;),f=&quot;object&quot;==typeof c&amp;&amp;c;e||d.data(&quot;bs.affix&quot;,e=new b(this,f)),&quot;string&quot;==typeof c&amp;&amp;e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on(&quot;load&quot;,function(){a(&#39;[data-spy=&quot;affix&quot;]&#39;).each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&amp;&amp;(c.offset.bottom=c.offsetBottom),c.offsetTop&amp;&amp;(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.06403s from github-fe140-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-2c8ae50712a47d2b83d740cb875d55cdbbb3fdbccf303951cc6b7e63731e0c38.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-8773aa424fb9dd572fb8e34619a3b26ac87d566cb50824af1de320d0d225104a.js"></script>
      
      

      <div class="js-socket-channel" data-channel="test:sulazix"></div>

  </body>
</html>

