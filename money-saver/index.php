<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Saver App</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" 
    integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link href='https://fonts.googleapis.com/css?family=Play' rel='stylesheet' type='text/css'>
    <link href="css/information_card.css" rel="stylesheet" type="text/css"/>
</head>

<body>
    
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
    
<div id = "info" style="display:none;"></div>

<!-- DONT INCLUDE ANY OF THE ABOVE CODE IN YOUR FILES -->

<?php

require('includes/boxobject_class.php');
require('includes/mysqlwrapper_class.php');
	
	
    if(empty($_REQUEST['page']) || ($_REQUEST['displayPage'] == "index")){

            if(empty($_REQUEST['displayPage'])) {
                    require('home.php'); 

            }

    }
	
	
	
?>


            
<!-- DONT INCLUDE ANY OF THE BELOW CODE IN YOUR FILES -->

    <script src='https://www.google.com/recaptcha/api.js'></script>
    <script src="js/jquery-2.1.4.min.js" type="text/javascript"></script>
    <script src="js/bootstrap.js" type="text/javascript"></script>
    <script src="js/bootstrap.min.js" type="text/javascript"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
    <script src="js/npm.js" type="text/javascript"></script>
    <script src="js/custom.js"></script>
    <script src="js/infoCard.js"></script>
    <script src="js/fusioncharts.charts.js" type="text/javascript"></script>
    <script src="js/fusioncharts.js" type="text/javascript"></script>
    <script src="js/demochart.js" type="text/javascript"></script>
    
</body>

</html>