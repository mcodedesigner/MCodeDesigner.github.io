$(function() {

	// Mobile Menu
	$(".sandwich-box").click(function() {
	  $(".sandwich-icon").toggleClass("active");
	});
	$(".main-menu li a").click(function() {
		$(".main-menu").removeClass('active');
		$(".sandwich-icon").toggleClass("active");
	});
	$(".sandwich-box").click(function() {
		if($(".main-menu").hasClass("active")) {
			$(".main-menu").removeClass('active');
		} else {
			$(".main-menu").addClass('active');
		};
	});


	$('select').niceSelect();

});
