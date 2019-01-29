$(function() {

	// FullScreenMenu
	function fullScreenMenu(id, menu) {
		$(id).click(function() {
		  $(id + " .sandwich-icon").toggleClass("active");
		});
		$(menu + " a," + menu + " .close-icon").click(function() {
			$(menu).fadeOut(600);
			$(id + " .sandwich-icon").toggleClass("active");
		});
		$(id).click(function() {
			if($(menu).is(":visible")) {
				$(menu).fadeOut(600);
			} else {
				$(menu).fadeIn(600);
			};
		});
	};
	fullScreenMenu('#sandwich-1', '.fullscreen-menu');
	fullScreenMenu('#sandwich-2', '.fullscreen-menu-footer');

	$('.owl-catalog').owlCarousel({
		items: 4,
		autoplay: true,
		autoplayTimeout: 5000,
		loop: true,
		nav: true,
		navText: ['<i class="i-arrow-right"></i>', '<i class="i-arrow-right"></i>'],
		dots: false,
		responsive: {
			1200 : {
		        items: 4
		    },
			992 : {
		        items: 3
		    },
			540 : {
		        items: 2
		    },
			320 : {
		        items: 1
		    }
		}
	});
	$('.owl-features').owlCarousel({
		items: 4,
		responsive: {
			1200 : {
		        items: 4
		    },
			768 : {
		        items: 3,
		        autoplay: true
		    },
			540 : {
		        items: 2
		    },
			320 : {
		        items: 1
		    }
		}
	});

});
