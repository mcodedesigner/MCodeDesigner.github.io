$(function() {

	$('#form-popup').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		if (document.form.name.value == '' || document.form.phone.value == '' ) {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "mail/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thank-you').fadeIn();
			$(this).find('input').val('');
			$('#form-popup').trigger('reset');
		});
		return false;
	});


	// Mobile Menu
	$(".sandwich-box").click(function() {
	  $(".sandwich-icon").toggleClass("active");
	});
	$(".main-menu li a").click(function() {
		$(".main-menu").fadeOut(600);
		$(".sandwich-icon").toggleClass("active");
	});
	$(".sandwich-box").click(function() {
		if($(".main-menu").is(":visible")) {
			$(".main-menu").fadeOut(600);
			$(".main-menu li").removeClass("fadeInUp animated");
		} else {
			$(".main-menu").fadeIn(600);
			$(".main-menu li").addClass("fadeInUp animated");
		};
	});

	$(".header-info a, .main-menu a").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 500,
         easing: "swing"
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

	$('.production-carousel').owlCarousel({
        items: 1,
        autoplay: false,
	    loop: true,
	    dots: true
	});

	$('#review-carousel').owlCarousel({
        items: 5,
	    margin: 50,
        autoplay: true,
        autoplayTimeout: 10000,
	    autoWidth: true,
        center: true,
	    loop: true,
	    nav: false
	});
	$('#portfolio-carousel').owlCarousel({
        items: 5,
	    margin: 40,
        autoplay: true,
        autoplayTimeout: 5000,
	    autoWidth: true,
        center: true,
	    loop: true,
	    nav: false,
	});


	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


	$('.btn-popup').magnificPopup();


	$('.carousel-link--modal').magnificPopup();


	$('[name="client_phone"]').mask("+7(999) 999-9999");


	$('.header').animated('fadeInDownBig');
	$('.header-clock, .about-text').animated('bounceInLeft');
	$('.header-info').animated('bounceInRight');
	$('.title-section, .about aside').animated('bounceInRight');
	$('.about-product--info > p').animated('bounceInDown');
	$('.call-block').animated('fadeInUp');
	$('.production article p').animated('bounceInRight');
	$('.advantages li, .production-item, .order-list li, .delivery-item').animated('zoomIn');
	$('.review .owl-item, .portfolio .owl-item').animated('bounceIn');
	$('.delivery article p').animated('fadeInDown');
	$('.link-instagram').animated('wobble');
	$('.footer').animated('bounceInUp');
	
});
