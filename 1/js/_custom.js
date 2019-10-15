document.addEventListener("DOMContentLoaded", function() {

	$('.fullpage').fullpage({
		slidesNavigation: true,
		scrollingSpeed: 1000,
		scrollOverflow: true,
		anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'],
		menu: '#nav'
	});

	// initialized owlSlider
	$('.owl-brand').owlCarousel({
		loop: true,
		autoWidth:true,
	    items:1,
		margin: 30,
		nav: true,
		navText: [
			"<span class='owl-btn'><i class='i-left'></i></span>",
			"<span class='owl-btn'><i class='i-right'></i></span>"
		],
		dots: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 1000,
		responsive : {
		    320 : {
		       margin: 20
		    },
		    1200 : {
		       margin: 30
		    }
		}
	});

	// initialized owlSlider
	$('.owl-review').owlCarousel({
		loop: true,
		// autoWidth: true,
	    items:4,
		margin: 0,
		nav: false,
		navText: [
			"<span class='owl-btn'><i class='i-left'></i></span>",
			"<span class='owl-btn'><i class='i-right'></i></span>"
		],
		dots: false,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 1000,
		responsive : {
			320 : {
				items: 2
			},
		    992 : {
		       items: 3
		    },
		    1400 : {
		       items: 4
		    }
		}
	});

	// initialized owlSlider
	$('#owl-catalog').owlCarousel({
		loop: true,
		// autoWidth: true,
	    items:4,
		margin: 0,
		nav: true,
		navText: [
			"<span class='owl-btn'><i class='i-left'></i></span>",
			"<span class='owl-btn'><i class='i-right'></i></span>"
		],
		dots: false,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 1000,
		responsive : {
		    320 : {
		       items: 3
		    },
		    1200 : {
		       items: 4
		    }
		}
	});


	$(".tab_item").not(":first").hide();
	$(".tab").click(function() {
	    $(".tab").removeClass("active").eq($(this).index()).addClass("active");
	    $(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


	$('.read-more').readMore({
		readMoreHeight: "105"
	});

});