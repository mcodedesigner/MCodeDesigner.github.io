$(function() {


	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};


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
	fullScreenMenu('#sandwich-1', '.fullscreen-nav');
	fullScreenMenu('#sandwich-2', '.fullscreen-menu');

	// callbackFormModal
	function callbackFormModal(id) {
		$(id + " .callback-link").click(function() {
		  $(id + ' .callback-form').toggleClass("active");
		});
		$(document).on('click', function(e) {
		  if (!$(e.target).closest(id).length) {
		    $(id + ' .callback-form').removeClass('active');
		  }
		  e.stopPropagation();
		});
	};
	callbackFormModal("#callback-id1");
	callbackFormModal("#callback-id2");


	// Input phome-number mask
	$('.callback-form input[type="tel"]').mask("+7(999)-999-99-99");


	// Owl-Carousel - .owl-banner
	$('.owl-banner').owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 5000,
		loop: true
	});

	// Owl-Carousel - .owl-product
	$('.owl-product').owlCarousel({
		items: 4,
		autoplay: true,
		autoplayTimeout: 10000,
		autoplaySpeed: 1000,
		loop: true,
		nav: true,
		navText: ['<', '>'],
		dots: false,
		autoplayHoverPause: true,
		responsive:{
	        1200:{
	            items:4
	        },
	        992:{
	            items:3
	        },
	        540:{
	            items:2,
	            margin: 5
	        },
	        0:{
	            items:1,
	            margin: 5
	        }
	    }
	});

	// Owl-Carousel - .owl-product
	$('.owl-review').owlCarousel({
		items: 3,
		autoplay: true,
		autoplayTimeout: 7000,
		autoplaySpeed: 3000,
		loop: true,
		margin: 20,
		autoWidth: true,
		center: true,
		nav: false,
		autoplayHoverPause: true,
		responsive:{
	        0:{
	            dots: true,
	            items: 1
	        },
	        540:{
	            items: 2
	        },
	        1200:{
	            dots: false
	        }
	    }
	});


	// Tabs
	function Tabs(options){
		
		var tabs = document.querySelector(options.el);
		var initCalled = false;
		var tabNavigation = tabs.querySelector(".m-tabs-nav");
		var tabNavigationLinks = tabs.querySelectorAll(".m-tabs-nav__link");
		var tabContentContainers = tabs.querySelectorAll(".m-tab");

		var marker = options.marker ? createNavMarker() : false;

		var activeIndex = 0;

	  function init(){
			if (!initCalled){
				initCalled = true;

				for (var i = 0; i < tabNavigationLinks.length; i++){
	    			var link = tabNavigationLinks[i];
	    			clickHandlerSetup(link, i)
	    		}

	    		if (marker){
	    			setMarker(tabNavigationLinks[activeIndex]);
	    		}
			}
		}

		function clickHandlerSetup(link, index){
	    	link.addEventListener("click", function(e){
	    		e.preventDefault();
	    		goToTab(index);
	    	})
	    }

	    function goToTab(index){
	    	if (index >= 0 && index != activeIndex && index <= tabNavigationLinks.length){
	    		tabNavigationLinks[activeIndex].classList.remove('is-active');
	    		tabNavigationLinks[index].classList.add('is-active');
	    		
	    		tabContentContainers[activeIndex].classList.remove('is-active');
	    		tabContentContainers[index].classList.add('is-active');

	    		if (marker){
	    			setMarker(tabNavigationLinks[index]);
	    		}

	    		activeIndex = index;
	    	}
	    }

	    function createNavMarker(){
	    	var marker = document.createElement("div");
	    	marker.classList.add("m-tabs-nav-marker");
	    	tabNavigation.appendChild(marker);
	    	return marker;
	    }

	    function setMarker(element){
	        marker.style.left = element.offsetLeft +"px";
	        marker.style.width = element.offsetWidth + "px";
	    }

	    return {
	    	init: init,
	    	goToTab: goToTab
	    }
	};


	var m = new Tabs({
		el: "#product-tab",
		marker: true
	});

	m.init();
	// end Tabs

	
});
