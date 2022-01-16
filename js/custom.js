$(document).ready(function(){

  // type JS  plugin added on the Banner Part //
  var typed = new Typed('.pos-over', {

        strings: ["michalvina"],
        loop: 'true',
        startDelay: 1000,
        typeSpeed: 150,
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