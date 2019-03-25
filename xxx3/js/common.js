$(function() {

	accordion.init({
    	id: 'accordion',
		expandWidth: 447,
		itemWidth: 135
  	});

  	$(".owl-carousel-brand").owlCarousel({
	    loop:true,
	    autoWidth:true,
	    items: 7,
	    margin: 5,
	    autoplay: true,
	    autoplayTimeout: 3000,
	    autoplaySpeed: 1000,
	    responsiveClass:true,
	    responsive:{
            1100:{
                center: false
            },
            320:{
                center: true
            }
        }
  	});

  	$(".owl-carousel-game").owlCarousel({
	    loop:true,
	    autoWidth:true,
	    items: 1,
	    margin: 10,
	    autoplay: false,
	    autoplaySpeed: 1000,
	    center: true
  	});

});
