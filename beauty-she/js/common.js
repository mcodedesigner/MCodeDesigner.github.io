$(function() {


	$(".sandwich-icon").click(function() {
	  $(".sandwich").toggleClass("active");
	});
	$(".main-menu li a").click(function() {
		$(".main-menu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	});
	$(".sandwich-icon").click(function() {
		if($(".main-menu").is(":visible")) {
			$(".main-menu").fadeOut(600);
			$(".main-menu li").removeClass("fadeInUp animated");
		} else {
			$(".main-menu").fadeIn(600);
			$(".main-menu li").addClass("fadeInUp animated");
		};
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


	$('.btn-popup').magnificPopup();
	

	$("#expert-slider").owlCarousel({
		items: 1,
		autoplay: false,
		loop: true,
		lazyLoad: true,
		center: true,
		dots: true,
		nav: true,
		navText: ['<i class="icon-left"></i>', '<i class="icon-right"></i>']
	});

	$("#portfolio-carousel").owlCarousel({
		items: 5,
		autoplay: true,
		loop: false,
		lazyLoad: true,
		dots: true,
		nav: false,
		rewind: true,
		responsive: {
			1600 : {
		        items : 5
		    },
			1300 : {
		        items : 4
		    },
			768 : {
		        items : 3
		    },
			640 : {
		        items : 2
		    },
			320 : {
		        items : 1
		    }
		}
	});

	$("#review-slider").owlCarousel({
		items: 1,
		autoplay: false,
		loop: true,
		lazyLoad: true,
		center: true,
		dots: true,
		nav: false
	});

	$("#form-popup, #form-popup-footer").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form-popup").trigger("reset");
		});
		return false;
	});
	
});
