<?php
// Set the default timezone (required for PHP5 strict)
date_default_timezone_set('UTC');

error_reporting( E_ALL | E_STRICT );
ini_set('display_startup_errors', 1);
ini_set('display_errors', 1);
 
include_once('AutoLoader.php');
// Register the directory to your include files

//echo dirname(__FILE__);

AutoLoader::registerDirectory('../src/iframe/app/classes');