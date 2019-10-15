$(function() {

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

});
