$(function() {

  $('.flower-options > div').on('click', function() {
      var headphonesColor = $(this).attr('data-image');
  
      $('.flower-options .active, .production__image--colors .active').removeClass('active');
      $('.production__image--colors picture[data-image = ' + headphonesColor + ']').addClass('active');
      $(this).addClass('active');
  });


  // menu
  $(".sandwich-box").click(function() {
    $(".sandwich-icon").toggleClass("active");
  });
  $(".mobile-nav a").click(function() {
    $(".mobile-nav").fadeOut(600);
    $(".sandwich-icon").toggleClass("active");
  });
  $(".sandwich-box").click(function() {
    if($(".mobile-nav").is(":visible")) {
      $(".mobile-nav").fadeOut(600);
    } else {
      $(".mobile-nav").fadeIn(600);
    };
  });


  $(".main__slider").owlCarousel({
    items: 1,
    dots: true
  });

  $(".main__slider .owl-dot").html("<i class='i-pointing-to-right'></i>");


  $(".action__slider").owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    navText: ['<i class="i-left-arrow"></i>', '<i class="i-right-arrow"></i>']
  });

  $(".production__slider").owlCarousel({
    items: 1,
    dots: false,
    nav: true,
    navText: ['<i class="i-left-arrow"></i>', '<i class="i-right-arrow"></i>']
  });

  $(".owl-review").owlCarousel({
    items: 3,
    dots: false,
    nav: true,
    navText: ['<i class="i-left-arrow"></i>', '<i class="i-right-arrow"></i>']
  });




  $(".clients__slider").touchSlider({
    paging: false,
    counter : function (e) {
      $(".touchSlider-numbers").html(e.current + "<strong>/</strong>" + "<span>" + e.total + "</span>");
    }
  });


  $(".first_tab").champ();


  $('.beefup').beefup({
    openSingle: true
  });

   $('select').niceSelect();
});

