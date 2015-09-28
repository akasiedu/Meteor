function include(url){
  document.write('<script src="'+url+'"></script>');
  return false ;
}

/* cookie.JS
========================================================*/
include('js/jquery.cookie.js');


/* DEVICE.JS
========================================================*/
include('js/device.min.js');

/* Stick up menu
========================================================*/
include('js/tmstickup.js');
$(window).load(function(){
  $('#stuck_container').TMStickUp({
  })
});

/* Easing library
========================================================*/
include('js/jquery.easing.1.3.js');


/* ToTop
========================================================*/
include('js/jquery.ui.totop.js');
$(function () {   
  $().UItoTop({ easingType: 'easeOutQuart' });
});

/* ToTop Animation
========================================================*/
$(document).ready(function() {
  $('a#toTop.animated').hover(
    function() {
      $(this).addClass('pulse infinite');
      },
    function() {
    $(this).removeClass('pulse infinite'); 
  }
)})

/* DEVICE.JS AND SMOOTH SCROLLIG
========================================================*/
include('js/jquery.mousewheel.min.js');
include('js/jquery.simplr.smoothscroll.min.js');
$(function () { 
  if ($('html').hasClass('desktop')) {
      $.srSmoothscroll({
        step:150,
        speed:800
      });
  }   
});

/* Stellar.js
========================================================*/
include('js/stellar/jquery.stellar.js');
$(document).ready(function() { 
  if ($('html').hasClass('desktop')) {
      $.stellar({
        horizontalScrolling: false,
        verticalOffset: 0
      });
  }  
});


/* Copyright Year
========================================================*/
var currentYear = (new Date).getFullYear();
$(document).ready(function() {
  $("#copyright-year").text( (new Date).getFullYear() );
});


/* Superfish menu
========================================================*/
include('js/superfish.js');
include('js/jquery.mobilemenu.js');


/* Orientation tablet fix
========================================================*/
$(function(){
// IPad/IPhone
	var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
	ua = navigator.userAgent,

	gestureStart = function () {viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";},

	scaleFix = function () {
		if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
			viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
			document.addEventListener("gesturestart", gestureStart, false);
		}
	};
	
	scaleFix();
	// Menu Android
	if(window.orientation!=undefined){
  var regM = /ipod|ipad|iphone/gi,
   result = ua.match(regM)
  if(!result) {
   $('.sf-menu li').each(function(){
    if($(">ul", this)[0]){
     $(">a", this).toggle(
      function(){
       return false;
      },
      function(){
       window.location.href = $(this).attr("href");
      }
     );
    } 
   })
  }
 }
});
var ua=navigator.userAgent.toLocaleLowerCase(),
 regV = /ipod|ipad|iphone/gi,
 result = ua.match(regV),
 userScale="";
if(!result){
 userScale=",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+userScale+'">')





/* SF Menu Animation
========================================================*/
$(window).load(function() {
  $('.sf-menu > li').each(function(){
      $('.sf-menu > li').hover(function(){
        $(this).find('.sf-anim').addClass('animated bounceInDown');
      }, function(){
        $(this).find('.sf-anim').removeClass('animated bounceInDown'); 
    })
  })  
});

/* Full Width Image Start Animation
========================================================*/
$(document).ready(function(){
  setTimeout(function() {
    $('.full-width-img-1').find('h1').animate({opacity: "1"},500).addClass('animated rotateIn');
  }, 500);
});
$(document).ready(function(){
  setTimeout(function() {
    $('.full-width-img-1').find('h2').animate({opacity: "1"},500).addClass('animated fadeInLeft');
  }, 1000);
});
$(document).ready(function(){
  setTimeout(function() {
    $('.full-width-img-1').find('.btn_wrapper').animate({opacity: "1"},500).addClass('animated fadeInUp');
  }, 1200);
});






