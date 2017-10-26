/*! Only Popup - v0.0.1 - 2013-07-25
 * http://bestprogrammer.kiev.ua/plugins/only-popup/
 * Copyright (c) 2013 Sergey Shckuliov; */
(function( $ ){
	var self;
	self = {
		init : function(options) {
			var settings = {
				position: 'fixed',
				left: 0,
				top: 0,
				width: '100%',
				height: '100%',
				background: 'rgba(255,255,255,.75)'};
			settings['text-align'] = 'center';
			settings['z-index'] = 501;
			settings = $.extend(settings,options);
			var o = $('#onlypopup');
			if(!o.length) {
				var h = $('<div id="onlypopup"></div>').css(settings);
				$('body').prepend(h);
				h.click(function(event) {
					self.destroy();
				});
				$(document).on("keyup.onlyPopup", function(e) {
					e.keyCode===27 && self.destroy();
				});
				o = $('#onlypopup');
				o.data('onlypopup',self);
			}
			return o;
		},
		destroy : function() {
			$('#onlypopup').removeData('onlypopup');
			$(document).trigger("destroy.onlyPopup");
			$(document).off(".onlyPopup");
			$(window).off(".onlyPopup");
			$('#onlypopup').remove();
		}
	};
	$.fn.onlyPopup = function(method) {
		if ( self[method] ) {
		  return self[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
		  return self.init.apply( this, arguments );
		} else {
		  $.error( 'Метод с именем ' +  method + ' не существует для jQuery.onlyPopup' );
		} 	
	};
})(jQuery);
