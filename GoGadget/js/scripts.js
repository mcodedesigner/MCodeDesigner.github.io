$(document).ready(function(){

	$('#header').has(".sets_carousel").addClass('indent');

	// выпадающее меню
	$('#header .icon-menu').click(function(){
		$('#drop_menu').fadeIn(300);
		$('#shadow').addClass('show');
	});
	$('#drop_menu .icon-close').click(function(){
		$('#drop_menu').fadeOut(300);
		$('#shadow').removeClass('show');
	});
	$('#shadow').click(function(event){
		if ($(event.target).closest($('#drop_menu')).length){
			return;
		};
		$('#drop_menu').fadeOut(300);
		$('#shadow').removeClass('show');
		event.stopPropagation();
	});


	// preventDefault active link
	$('.nav_crumb .active a, .cabinet_nav .active, .tag_cloud .active, .device_menu .active, .retail_top .active, .paginator .active, .cabinet_title').click(function(e){
		e.preventDefault();
	});

	$('.gallery .thumb a').click(function(eventObject) {
		if ($('.gallery .big img').attr('src') != $(this).attr('href')) {
			$('.gallery .big img').hide().attr('src', $(this).attr('href'));
			$('.gallery .big img').load(function() {
				$(this).fadeIn(300);
			});
		};
		eventObject.preventDefault();
	});
	$('.gallery .thumb li').click(function() {
		$(".gallery .thumb li").removeClass("active");
		$(this).addClass("active");
	});


	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {
	};


	// style select
	$('select').niceSelect();

});