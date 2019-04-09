$(function() {

	$(".main__slider").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: ['<i class="i-back"></i>', '<i class="i-next"></i>'],
		autoplay: true,
		autoplayHoverPause: true
	});

});


// showHide textBox
var isWindowSize = function() {
  return 150
}
var showHideBtn = {

    init: function(){

        var btnText, btnAltText;

        showHideBtn.containerText = $('.js-seo-content');
        showHideBtn.btnEl = $('.js-show-btn');
        // showHideBtn.btnText = $('.js-show-btn').text();
        // showHideBtn.btnAltText = $('.js-show-btn').data('alt-text');

        if(showHideBtn.containerText.length > 0){
            $(showHideBtn.containerText).css({
                'max-height': 'initial',
                'overflow': 'visible'
            }).removeClass('article_seo');

            if($(showHideBtn.btnEl).hasClass('active')){
                btnText = $('.js-show-btn').text();
                btnAltText = $('.js-show-btn').attr('data-alt-text');
                $(showHideBtn.btnEl).removeClass('active').text(btnAltText).attr('data-alt-text', btnText);
            }
        }

        showHideBtn.btnBlock = $('.js_read-more');
        showHideBtn.containerTextHeight = $('.js-seo-content').height();

        if(!!showHideBtn.containerTextHeight && showHideBtn.containerTextHeight > isWindowSize()){

            $(showHideBtn.btnBlock).css('display', 'block');

            if(!showHideBtn.containerTextHeight){
                showHideBtn.containerTextHeight = 2000;
            }


            $(showHideBtn.containerText).css({
                'max-height': isWindowSize() + 'px',
                'overflow': 'hidden'
            }).addClass('article_seo');

            $(showHideBtn.btnEl).click(function(){
                if ($(this).hasClass('active')){
                    showHideBtn.close();
                } else {
                    showHideBtn.open();
                }
            })
        } else {
            $(showHideBtn.btnBlock).css('display', 'none')
            $(showHideBtn.containerText).css({
                'max-height': 'initial',
                'overflow': 'visible'
            }).removeClass('article_seo');
        }

    },
    open: function(){
        btnText = $('.js-show-btn').text();
        btnAltText = $('.js-show-btn').attr('data-alt-text');
        $(showHideBtn.btnEl).addClass('active').text(btnAltText).attr('data-alt-text', btnText);
        $(showHideBtn.containerText).css({
            'max-height': showHideBtn.containerTextHeight
        }).removeClass('article_seo');
    },
    close: function(){
        btnText = $('.js-show-btn').text();
        btnAltText = $('.js-show-btn').attr('data-alt-text');
        $(showHideBtn.btnEl).removeClass('active').text(btnAltText).attr('data-alt-text', btnText);
        $(showHideBtn.containerText).css({
            'max-height': isWindowSize() + 'px'
        }).addClass('article_seo');
    }
};

showHideBtn.init();