$(document).ready(function() {
    $('.search div input').focus(function(){
		$(this).addClass('focus');
	});
	
	$('.new_news ul li:eq(1) a').css({'padding':'19px 10px 11px 15px'});
	$('.new_news ul li:last-child a').css({'padding-bottom':'18px'});
	
	
});