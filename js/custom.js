$(document).ready(function(){
  
  // Nav fixed after scrolling a way
  $(window).scroll(function(){

    var scrolling = $(this).scrollTop();

    if (scrolling > 200){
      $('header').addClass('nav-fixed');
    }else{
      $('header').removeClass('nav-fixed');
    }
  });

  // Tilt JS
  $('.js-tilt').tilt({
    scale: 1.1
  });

  // type JS on the Banner //
  var typed = new Typed('.pos-over', {

        strings: ["michalvina"],
        loop: 'true',
        startDelay: 1000,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
      });

  // Active class jQuery added on the nav bar in portfolio //
      $('#portfolio li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
      });
  // =============Adding class Ends============= //

});