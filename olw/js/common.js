$(function() {

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("#home-slider").owlCarousel({
		items: 1,
		nav: true,
		navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
	});

	$('.selectpicker').selectpicker({
	  size: 6
	});


	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
