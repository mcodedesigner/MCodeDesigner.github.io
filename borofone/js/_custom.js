document.addEventListener("DOMContentLoaded", function() {

	$('.fullpage').fullpage({
		slidesNavigation: true,
		scrollingSpeed: 1000,
		scrollOverflow: true
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
		smartSpeed: 1000
	});

	// initialized owlSlider
	$('#owl-review__partners').owlCarousel({
		loop: true,
		// autoWidth: true,
	    items:4,
		margin: 0,
		nav: true,
		navText: [
			"<span class='owl-btn'><i class='i-left'></i></span>",
			"<span class='owl-btn'><i class='i-right'></i></span>"
		],
		dots: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 1000
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
		smartSpeed: 1000
	});


	// initialized tabs
	var m = new Tabs({
		el: "#our-product--tabs",
		marker: true
	});
	m.init();


	$('.review__description-1').expandable({
	    height: 135,
	    more: 'Показать полностью',
	    less: 'Свернуть'
	});

});