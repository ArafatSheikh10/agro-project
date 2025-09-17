$(document).ready(function() {

  // preloder-start

  $(window).on('load', function() {
    $('#preloader').delay(1000).fadeOut(5000, function() {
      $(this).remove(); 
    });
  });


  // aos animation

  AOS.init({
    duration: 1000,
  });

  // navbar
    $(".navigation-trigger").click(function () {
      $(".responsive-navbar, .overlay").removeClass("-left-full").addClass("left-0");
    });

    // Close navbar (overlay or X button click)
    $(".overlay, .close-nav").click(function () {
      $(".responsive-navbar, .overlay").removeClass("left-0").addClass("-left-full");
    });
  // navigation-active

  $(".navigation-bar li a").click(function(){
    $(".navigation-bar li a").removeClass("active");
    $(this).addClass("active");
  })

// Alternative - শুধু autoplay direction change করুন, carousel destroy করবেন না
let isRTL = true;
let owl;

function initCarousel() {
    owl = $('.brand-carousel').owlCarousel({
        rtl: isRTL,
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 },
            1200: { items: 4 },
            1500: { items: 5 },
            1600: { items: 6 },
        }
    });
}

// Initial carousel
initCarousel();

// শুধু autoplay direction change করুন
setInterval(function() {
    // Stop current autoplay
    owl.trigger('stop.owl.autoplay');
    
    // Toggle direction flag
    isRTL = !isRTL;
    
    // Manually control slide direction
    if (isRTL) {
        // Right to left movement
        owl.trigger('prev.owl.carousel');
    } else {
        // Left to right movement  
        owl.trigger('next.owl.carousel');
    }
    
    // Resume autoplay
    setTimeout(function() {
        owl.trigger('play.owl.autoplay');
    }, 100);
    
    console.log('Direction:', isRTL ? 'Right to Left' : 'Left to Right');
    
}, 2000);

});

// number-count

$('.number-counter').counterUp({
  delay: 10,
  time: 1000
});

$('.testiomonial-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots: false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
  }
})