<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Butano Creek Girl Scout Camp</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">

    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css">

    <!-- Optional theme -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap-theme.min.css">

    <!-- Latest compiled and minified JavaScript -->
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.js"></script>
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
    
    <script src="../js/showRandomPhoto.js"></script>
    
    <link rel="stylesheet" href="../css/butano.css">
    
  </head>
  <body>

    <div class="container">
      <div class="header">
        <ul class="nav nav-pills pull-right">
          <li><a href="../">Home</a></li>
          <li id="units_li"><a href="../units/">Units</a></li>
          <li id="calendar_li"><a href="../calendar/">Calendar</a></li>
          <li id="forms_li"><a href="../forms/">Camper forms</a></li>
          <li id="adults_li"><a href="../adults/">Adult forms</a></li>
          <li id="faq_li"><a href="../faq/">FAQ</a></li>
          <li id="photos_li"><a href="../photos/">Photos</a></li>
          <li id="betterbutano_li"><a href="../betterbutano/">Donate</a></li>
          <li id="contact_li"><a href="../contact/">Contact Us</a></li>
          <li><a href="http://www.facebook.com/pages/Camp-Butano-Creek/103349483091091">Facebook</a></li>
        </ul>
        <h3 class="text-muted">Camp Butano Creek</h3>
      </div>

      
      <script>
        ['units', 'calendar', 'forms', 'faq', 'adults', 'photos', 'betterbutano', 'contact'].forEach(function(page){
          var re = new RegExp('/'+page+'/');
          if (location.href.match(re)) {
            $('#'+page+'_li').addClass('active');
          }
        });
      </script>