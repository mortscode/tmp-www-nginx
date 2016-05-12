<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
  '*' => array(
    'usePathInfo' => true
  ),

  'craft.dev' => array(
    'devMode' => true,
    'environment' => 'local',
    'siteUrl' => 'http://modprop.craft.dev'
  ),

  '107.170.205.173' => array(
    'siteUrl' => 'http://107.170.205.173',
    'devMode' => false,
    'environmentVariables' => array(
      'basePath' => '/var/www/html/',
      'baseUrl'  => 'http://107.170.205.173',
    )
  ),

  'themodernproper.com' => array(
    'siteUrl' => 'http://themodernproper.com',
    'devMode' => false,
    'environmentVariables' => array(
      'basePath' => '/var/www/html/',
      'baseUrl'  => 'http://themodernproper.com',
    ),
  ),
);
