<?
$isHome = false;
$title = 'Photos';
include('../page_top.php');

?>

<br>

<div id="carousel-generic" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#carousel-generic" data-slide-to="0" class="active"></li>
    <script>
      for (var i=1; i<43; i++) {
        document.write('<li data-target="#carousel-generic" data-slide-to="'+i+'"></li>');
      }
    </script>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner">
    <div class="item active">
      <img src="http://i281.photobucket.com/albums/kk212/blasterfrump/campbutanocreek/medium/butano0001.jpg">
    </div>
  </div>

  <!-- Controls -->
  <a class="left carousel-control" href="#carousel-generic" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
  </a>
  <a class="right carousel-control" href="#carousel-generic" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
  </a>
</div>

<script>
  var html = '<div class="item active"><img src="http://i281.photobucket.com/albums/kk212/blasterfrump/campbutanocreek/medium/butano0001.jpg"></div>';
  for (var i=2; i<44; i++) {
    var pad = '';
    if (i<10) {pad += '0';}
    if (i<100) {pad += '0';}
    if (i<1000) {pad += '0';}

    console.log(i, pad);

    html += '<div class="item">';
    html += '<img src="http://i281.photobucket.com/albums/kk212/blasterfrump/campbutanocreek/medium/butano'+pad+i+'.jpg">';
    html += '</div>';
  }
  $('.carousel-inner').html(html);
  
</script>

<?php include('../page_bottom.php'); ?>

