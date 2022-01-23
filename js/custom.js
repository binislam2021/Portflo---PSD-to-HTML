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

  // type JS on the Banner
  var typed = new Typed('.pos-over', {

    strings: ["michalvina"],
    loop: 'true',
    startDelay: 1000,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
  });

  // wow JS
  new WOW().init();

    // Tilt JS in About
    $('.js-tilt').tilt({
      scale: 1.05
    });

    // Count Down js in wish
  $('#countdown').countdown({
    year: 2023,
    month: 1,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
  });

// Slick Slider in Service
$('.service-item').slick({
  slidesToShow: 3,
  autoplay: true,
  prevArrow: '<i class="far fa-circle circle-left wowo animate__animated animate__fadeInUp"><i class="fas fa-long-arrow-alt-left arrow-left"></i></i>',
  nextArrow: '<i class="far fa-circle circle-right wow animate__animated animate__fadeInUp"><i class="fas fa-long-arrow-alt-right arrow-right"></i></i>',
});

// Counter Up js in blog
  $('.counter').counterUp({
    delay: 1,
    time: 2000,
  });


  // Add & Remove Class in Portfolio Part
      $('#portfolio li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
      });

});