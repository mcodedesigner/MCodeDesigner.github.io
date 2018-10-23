$(function() {

	//Timer 1
	$('#countdown1').countDown({
		targetOffset: {
			'day': 		0,	//дней 
			'month': 	0,	//месяцев
			'year': 	0,	//лет
			'hour': 	1,	//часов
			'min': 		0,	//минут
			'sec': 		0	//секунд
		}
	});


	$("#carousel-brands").owlCarousel({
		items: 8,
		autoplay: true,
		loop: true,
		dots: false,
		nav: true,
		navText: ['<i class="icon-left"></i>', '<i class="icon-right"></i>']
	});

	$("#catalog-slider").owlCarousel({
		items: 1,
		autoplay: true,
		center: true,
		dots: true,
		nav: true,
		navText: ['<i class="icon-left"></i>', '<i class="icon-right"></i>']
	});

	$("#review-slider").owlCarousel({
		items: 1,
		autoplay: true,
		center: true,
		dots: true,
		nav: true,
		navText: ['<i class="icon-left"></i>', '<i class="icon-right"></i>']
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
