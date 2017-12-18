$(document).ready(function(){

	$('.privace-form .group').eq(0).addClass('margin');
	$('.privace-form h5').eq(1).addClass('margin');

	$('.nav li.active a').click(function(e){
		e.preventDefault();
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	(function(){
		var navHasClass = $('.nav ul li:first-child');
		if(navHasClass.hasClass('active')){
			$(navHasClass).find('a').append('<div></div>');
		}

		var formInput = $('.privace-form input[type="text"], .privace-form input[type="email"]');
		formInput.click(function(){
			$(this).parents('.privace-form').addClass('active');
		});
		formInput.blur(function(){
			$(this).parents().removeClass('active');
		});
	})();

	// Main Menu
	var touch = $(".nav .touch");
	var nav = $(".nav > ul");
	$(touch).click(function(){
		nav.slideToggle();
	});

	$(window).resize(function(){
		var wid = $(window).width();
		if(wid > 768 && nav.is(":hidden")){
			nav.removeAttr("style");
		}
	});
	// end Main Menu

	var sync1 = $("#sync1");
	var sync2 = $("#sync2");


	sync1.owlCarousel({
		singleItem : true,
		slideSpeed : 1000,
		navigation: true,
		pagination:true,
		afterAction : syncPosition,
		responsiveRefreshRate : 200,
		navigationText: ["",""]
	});

	sync2.owlCarousel({
		pagination:false,
		responsiveRefreshRate : 100,
		afterInit : function(el){
		  el.find(".owl-item").eq(0).addClass("synced");
		}
	});

	function syncPosition(el){
		var current = this.currentItem;
		$("#sync2")
		  .find(".owl-item")
		  .removeClass("synced")
		  .eq(current)
		  .addClass("synced")
		if($("#sync2").data("owlCarousel") !== undefined){
		  center(current)
		}
	}

	$("#sync2").on("click", ".owl-item", function(e){
		e.preventDefault();
		var number = $(this).data("owlItem");
		sync1.trigger("owl.goTo",number);
	});

	function center(number){
		var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
		var num = number;
		var found = false;
		for(var i in sync2visible){
		  if(num === sync2visible[i]){
		    var found = true;
		  }
		}

		if(found===false){
		  if(num>sync2visible[sync2visible.length-1]){
		    sync2.trigger("owl.goTo", num - sync2visible.length+2)
		  }else{
		    if(num - 1 === -1){
		      num = 0;
		    }
		    sync2.trigger("owl.goTo", num);
		  }
		} else if(num === sync2visible[sync2visible.length-1]){
		  sync2.trigger("owl.goTo", sync2visible[1])
		} else if(num === sync2visible[0]){
		  sync2.trigger("owl.goTo", num-1)
		}
	}

	

});