$(function() {

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


	$('select').niceSelect();

});
