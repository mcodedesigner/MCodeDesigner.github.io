$(document).ready(function(){

	// Width for input Search
	function inputSearchFun(){
		var inputSearch = $('.search_form input[type="text"]');
		inputSearch.css('width', inputSearch.width() - 59);
	};
	inputSearchFun();

	$('.hits_product .not .button, .main_menu a.active, .item .not .button').click(function(e){
		e.preventDefault();
	});

	// TABS
	var tabContainers1 = $('.tabs > div');
	tabContainers1.hide().filter(':first').show();
	$('.nav a').click(function () {
		tabContainers1.hide();
		tabContainers1.filter(this.hash).show();
		$('.nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();

	$(".our_view_carousel").owlCarousel({
		navigation : true,
		navigationText: ["<i class='icon-left-open'></i>","<i class='icon-right-open'></i>"],
		items : 3,
		pagination:false,
		itemsDesktop : [1360,2],
		itemsDesktopSmall : [980,2]
	});

	$("#main_slide").owlCarousel({
		autoPlay : 8000,
		stopOnHover : true,
		navigation:true,
		paginationSpeed : 1000,
		goToFirstSpeed : 2000,
		singleItem : true,
		autoHeight : true,
		transitionStyle:"fade",
		navigationText: ["<i class='icon-left-open-big'></i>","<i class='icon-right-open-big'></i>"]
	});

	//Ширина для pagination в главном слайдере
	var owlNav = $('#main_slide .owl-pagination');
	var owlNavWidth = owlNav.width() / 2;
	owlNav.css({'left':'50%', 'margin-left':-(owlNavWidth+5)});

}); //end ready