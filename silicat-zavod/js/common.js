$(function() {

	$("#home-slider").owlCarousel({
		items: 1,
		nav: false,
		navText: ['<i class="icon-arrowline-left"></i>', '<i class="icon-arrowline-right"></i>'],
		margin: 0,
		loop: true,
		autoplay: true,
		autoplayTimeout: 10000
	});

	$("#action-slider").owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		navText: ['<i class="icon-arrowline-left"></i>', '<i class="icon-arrowline-right"></i>']
	});

	$("#our-product").owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		navText: ['<i class="icon-arrowline-left"></i>', '<i class="icon-arrowline-right"></i>']
	});

	$("#our-client").owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		navText: ['<i class="icon-left-line"></i>', '<i class="icon-right-line"></i>']
	});

	// FullPage Slider
	$('#fullpage').fullpage({
		slidesNavigation: true,
		scrollingSpeed: 1000,
		scrollOverflow: true
	});


	// Accordion
	$('.accordion > li:eq(0) a').addClass('active').next().slideDown();
	$('.accordion a').click(function(j) {
	    var dropDown = $(this).closest('li').find('p');
	    $(this).closest('.accordion').find('p').not(dropDown).slideUp();

	    if ($(this).hasClass('active')) {
	        $(this).removeClass('active');
	    } else {
	        $(this).closest('.accordion').find('a.active').removeClass('active');
	        $(this).addClass('active');
	    }
	    dropDown.stop(false, true).slideToggle();
	    j.preventDefault();
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
	}


	var m = new Tabs({
		el: "#our-product--tabs",
		marker: true
	});

	m.init();
	// end Tabs


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	
});