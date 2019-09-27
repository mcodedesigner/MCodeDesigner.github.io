document.addEventListener("DOMContentLoaded", function() {

	$('.fullpage').fullpage({
		slidesNavigation: true,
		scrollingSpeed: 1000,
		scrollOverflow: true
	});

	// initialized owlSlider
	var owlBrand = $('.owl-brand');
	owlBrand.owlCarousel({
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
		smartSpeed: 1500
	});
	// end initialized owlSlider+

});