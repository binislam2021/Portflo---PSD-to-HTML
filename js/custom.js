$(document).ready(function(){
  
  // type JSon the Banner Part //
  $(window).scroll(function(){
    
    var scrolling = $(this).scrollTop();
    if (scrolling > 200){
      $('header').addClass('nav-fixed');
    }else{
      $('header').removeClass('nav-fixed');
    }
  });

  // type JS  plugin added on the Banner Part //

  // type JS on the Banner //
  var typed = new Typed('.pos-over', {

        strings: ["michalvina"],
        loop: 'true',
        startDelay: 1000,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
      });
  // =============type JS Ends============= //

  // Active class jQuery added on the nav bar in portfolio //
      $('#portfolio li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
      });
  // =============Adding class Ends============= //

});