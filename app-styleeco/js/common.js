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
	fullScreenMenu('#modal-video--open', '#modal-video');


	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.nav-toggle--link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.nav-toggle--menu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('.nav-toggle'), false);


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

	$('.owl-product-view').owlCarousel({
		items: 1
	});


	$('select').niceSelect();


	$("#price-slider").slider({
		animate:400,
		range: true,
		values:[1200,12738],
		orientation:'horizontal',
		min:1200,
		max:12738,
		slide: function(event, ui){
			$('.price-input--min').val(ui.values[0]);
			$('.price-input--max').val(ui.values[1]);
		}
	});

	$('.price-input--min').val(1200);
	$('.price-input--max').val(12738);

	$('.price-input--min').change(function(){
		var value1 = $('.price-input--min').val();
		var value2 = $('.price-input--max').val();
		if(parseInt(value1) > parseInt(value2)) {
			value1 = value2;
			$('.price-input--min').val(value1);
		}
		$("#price-slider").slider('values', 0, value1);
	});

	$('.price-input--max').change(function(){
		var value1 = $('.price-input--min').val();
		var value2 = $('.price-input--max').val();
		if(parseInt(value1) > parseInt(value2)) {
			value2 = value2;
			$('.price-input--max').val(value2);
		}
		$("#price-slider").slider('values', 1, value2);
	});



	$('.top-bar .button, .fullscreen-menu .button').magnificPopup({
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});


	$('.top-bar').stick_in_parent();


});
