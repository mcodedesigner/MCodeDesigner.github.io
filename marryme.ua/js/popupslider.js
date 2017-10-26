	$(document).ready(function() {
		var html_a = "";
		$('.ceremony_list a,.kortej_list a,.portfolio_images a,.portfolio_images_new a').each(function(i) {
			html_a+='<a class="rsImg" href="'+$(this).attr('href')+'"></a>';
		});
		$('.ceremony_list a,.kortej_list a,.portfolio_images a,.portfolio_images_new a').click(function() {
			var before_destroy = false;
			var slide_id = parseInt($(this).attr('rel'));
			var p = $().onlyPopup({background: 'rgba(255,255,255,.75)'});
			var oly = $('<div class="oly-wrap"><div id="olycontainer_bg"><div id="olycontainer" class="royalSlider rsDefault sliderInLightbox"></div></div></div>');
			p.after(oly);
			var con = $("#olycontainer");
			var h,w,h_win,w_win;
			var calc_size = function() {
				h_win = $(window).height();
				w_win = $(window).width();
				h = Math.floor(Math.max(Math.round(h_win*0.9),640)/10)*10;
				if(h_win-h<20) {
					h = h_win-20; 
				}
				w = Math.floor(Math.max(Math.round(h*1.5),960)/10)*10;
				if(w_win-w<20) {
					w = w_win-20; 
				}
			}
			calc_size();
			var resize = function() {
				calc_size();
				var cfg = {
					width:(w+20)+'px',
					height:(h+20)+'px'
				};
				cfg['top'] = Math.round((h_win-h-20)/2)+'px';
				cfg['left'] = Math.round((w_win-w-20)/2)+'px';
				oly.css(cfg);
				con.css({
					width:w+'px',
					height:h+'px'
				});
			}
			var init_royal = function() {
				// royalslider
				con.html(html_a);
				con.royalSlider({
					loop: false,
					imageScaleMode: 'fit',
					navigateByClick: true,
					numImagesToPreload:12,
					transitionType: 	'fade',
					sliderDrag: true,
					transitionSpeed: 1100,
					arrowsNavAutoHide: true,
					arrowsNavHideOnTouch: true,
					keyboardNavEnabled: true,
					fadeinLoadedSlide: true,
					globalCaptionInside: false,
					controlNavigation: false,
					imageAlignCenter:'none',
					autoHeight:true,
					controlsInside:true,
					autoScaleSlider:true,
					autoScaleSliderWidth:w,
					autoScaleSliderHeight:h,
					startSlideId:slide_id,
					imageScalePadding:0
					
				});
				var slider = con.data('royalSlider');
				if(slider) {
					slider.ev.on('rsBeforeDestroy', function() {
						if(p && p.data('onlypopup')) {
							before_destroy = true;
							p.data('onlypopup').destroy();
						}
					});
					slider.ev.on('rsAfterSlideChange', function(event) {
						var sl;
						if(con && (sl = con.data('royalSlider'))) {
							sl.updateSliderSize(true);
						}
					});					
				}
			}
			resize();
			$(window).on("resize.onlyPopup", function(e) {
				resize();
				var slider = con.data('royalSlider');
				if(slider) {
			    	slider.updateSliderSize();
			    }
			});
			$(document).on("destroy.onlyPopup", function(e) {
				p = null;
				if(!before_destroy) {
			        con.data('royalSlider').destroy();
			    }
				oly.remove();
				oly = null;
				con = null;
			});
			init_royal();
			return false;
		});
	});

