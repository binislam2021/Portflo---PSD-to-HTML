$(document).ready(function(){


  // preLoader
    $(document).ready(function(){
      $("#preloader").delay(1500).fadeOut();
    });
  
  
  // Nav fixed after scrolling a way
  $(window).scroll(function(){

    var scrolling = $(this).scrollTop();

    if (scrolling > 200){
      $('header').addClass('nav-fixed');
    }else{
      $('header').removeClass('nav-fixed');
    }

    // Back to Top Fade (New)
    if (scrolling > 500){
      $('#back-to-top i').fadeIn();
    }else{
      $('#back-to-top i').fadeOut();
    }

  });

  // Back to Top scroll on Click (New)
  $('#back-to-top i').click(function(){
    $('html, body').animate({
      scrollTop: 0,
    }, 1500);
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
  prevArrow: '<i class="far fa-circle circle-left wowo animate__animated animate__fadeInUp animate__slow"><i class="fas fa-long-arrow-alt-left arrow-left"></i></i>',
  nextArrow: '<i class="far fa-circle circle-right wow animate__animated animate__fadeInUp animate__slow"><i class="fas fa-long-arrow-alt-right arrow-right"></i></i>',
});


  // AOS js in portfolio
  AOS.init();


  // Mixit up in portfolio
  var mixer = mixitup('.port-images');


  // Add & Remove Class in Portfolio Part
  $('.mixitup-control-active').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
  });


  // Parallax bg js in testimonial
  $('#testimonial').parallax({imageSrc:'images/testimonial-bg.jpg'});


  // slick js in testimonial
  $('#testimonial .testi-slider').slick({
    slidesToShow: 2,
    autoplay: true,
    prevArrow: '<div class="testi-alter wow animate__animated animate__fadeInUp animate__slow"><div class="circle alter-left white"><i class="fas fa-long-arrow-alt-left fs-30"></i></div></div>',
    
    nextArrow: '<div class="testi-alter wow animate__animated animate__fadeInUp animate__slow"><div class="circle alter-right white"><i class="fas fa-long-arrow-alt-right fs-30"></i></div></div>',
  });


// Counter Up js in blog
  $('.counter').counterUp({
    delay: 1,
    time: 2000,
  });

});