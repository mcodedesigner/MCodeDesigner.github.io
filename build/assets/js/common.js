function get_name_browser(){
    // получаем данные userAgent
    var ua = navigator.userAgent;
    // с помощью регулярок проверяем наличие текста,
    // соответствующие тому или иному браузеру
    if (ua.search(/Chrome/) > 0) return 'GoogleChrome';
    if (ua.search(/Firefox/) > 0) return 'Firefox';
    if (ua.search(/Opera/) > 0) return 'Opera';
    if (ua.search(/Safari/) > 0) return 'Safari';
    if (ua.search(/MSIE/) > 0) return 'InternetExplorer';
    // условий может быть и больше.
    // сейчас сделаны проверки только
    // для популярных браузеров
    return 'unknown';
}

// пример использования
var browser = get_name_browser();
Modernizr.prefixed(browser);

//Add Modernizr test
Modernizr.addTest('isios', function() {
    return navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
});

//usage
if (Modernizr.isios) {
    //this adds ios class to body
    Modernizr.prefixed('ios');
} else {
    //this adds notios class to body
    Modernizr.prefixed('notios');
}

//Add Modernizr test
Modernizr.addTest('isandroid', function() {
    return navigator.userAgent.match(/(Android)/g);
});

//usage
if (Modernizr.isandroid) {
    //this adds ios class to body
    Modernizr.prefixed('android');
} else {
    //this adds notios class to body
    Modernizr.prefixed('notandroid');
}

/*
 Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
*/
(function(){var b,f;b=this.jQuery||window.jQuery;f=b(window);b.fn.stick_in_parent=function(d){var A,w,J,n,B,K,p,q,k,E,t;null==d&&(d={});t=d.sticky_class;B=d.inner_scrolling;E=d.recalc_every;k=d.parent;q=d.offset_top;p=d.spacer;w=d.bottoming;null==q&&(q=0);null==k&&(k=void 0);null==B&&(B=!0);null==t&&(t="is_stuck");A=b(document);null==w&&(w=!0);J=function(a,d,n,C,F,u,r,G){var v,H,m,D,I,c,g,x,y,z,h,l;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);I=A.height();g=a.parent();null!=k&&(g=g.closest(k));
    if(!g.length)throw"failed to find stick parent";v=m=!1;(h=null!=p?p&&a.closest(p):b("<div />"))&&h.css("position",a.css("position"));x=function(){var c,f,e;if(!G&&(I=A.height(),c=parseInt(g.css("border-top-width"),10),f=parseInt(g.css("padding-top"),10),d=parseInt(g.css("padding-bottom"),10),n=g.offset().top+c+f,C=g.height(),m&&(v=m=!1,null==p&&(a.insertAfter(h),h.detach()),a.css({position:"",top:"",width:"",bottom:""}).removeClass(t),e=!0),F=a.offset().top-(parseInt(a.css("margin-top"),10)||0)-q,
        u=a.outerHeight(!0),r=a.css("float"),h&&h.css({width:a.outerWidth(!0),height:u,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":r}),e))return l()};x();if(u!==C)return D=void 0,c=q,z=E,l=function(){var b,l,e,k;if(!G&&(e=!1,null!=z&&(--z,0>=z&&(z=E,x(),e=!0)),e||A.height()===I||x(),e=f.scrollTop(),null!=D&&(l=e-D),D=e,m?(w&&(k=e+u+c>C+n,v&&!k&&(v=!1,a.css({position:"fixed",bottom:"",top:c}).trigger("sticky_kit:unbottom"))),e<F&&(m=!1,c=q,null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),
        h.detach()),b={position:"",width:"",top:""},a.css(b).removeClass(t).trigger("sticky_kit:unstick")),B&&(b=f.height(),u+q>b&&!v&&(c-=l,c=Math.max(b-u,c),c=Math.min(q,c),m&&a.css({top:c+"px"})))):e>F&&(m=!0,b={position:"fixed",top:c},b.width="border-box"===a.css("box-sizing")?a.outerWidth()+"px":a.width()+"px",a.css(b).addClass(t),null==p&&(a.after(h),"left"!==r&&"right"!==r||h.append(a)),a.trigger("sticky_kit:stick")),m&&w&&(null==k&&(k=e+u+c>C+n),!v&&k)))return v=!0,"static"===g.css("position")&&g.css({position:"relative"}),
        a.css({position:"absolute",bottom:d,top:"auto"}).trigger("sticky_kit:bottom")},y=function(){x();return l()},H=function(){G=!0;f.off("touchmove",l);f.off("scroll",l);f.off("resize",y);b(document.body).off("sticky_kit:recalc",y);a.off("sticky_kit:detach",H);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:"",width:""});g.position("position","");if(m)return null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),h.remove()),a.removeClass(t)},f.on("touchmove",l),f.on("scroll",l),f.on("resize",
        y),b(document.body).on("sticky_kit:recalc",y),a.on("sticky_kit:detach",H),setTimeout(l,0)}};n=0;for(K=this.length;n<K;n++)d=this[n],J(b(d));return this}}).call(this);

var element=document.getElementsByClassName('.body-content-sidebar');
if(element) {
    $(window).resize(function () {
        if ($(window).innerWidth() < 1024) {
            $('.sticky').trigger('sticky_kit:detach');
            $('.sticky-arrow').trigger('sticky_kit:detach');
        } else {
            $('.sticky').stick_in_parent({offset_top: 0,parent:'.product-page'});
            $('.sticky-arrow').stick_in_parent({offset_top: 0,parent:'.product-page'});
        }
    });
    $(window).ready(function () {
        if ($(window).innerWidth() < 1024) {
            $('.sticky').trigger('sticky_kit:detach');
            $('.sticky-arrow').trigger('sticky_kit:detach');
        } else {
            $('.sticky').stick_in_parent({offset_top: 0,parent:'.product-page'});
            $('.sticky-arrow').stick_in_parent({offset_top: 0,parent:'.product-page'});
        }
    });

    $(window).resize(function () {
        if ($(window).innerWidth() < 767) {
            $('.sidebar-sticky').trigger('sticky_kit:detach');
        } else {
            $('.sidebar-sticky').stick_in_parent({offset_top: 30});
        }
    });
    $(window).ready(function () {
        if ($(window).innerWidth() < 767) {
            $('.sidebar-sticky').trigger('sticky_kit:detach');
        } else {
            $('.sidebar-sticky').stick_in_parent({offset_top: 30});
        }
    });
}

window.onload = function() {
    var div = document.querySelector('.loading');
    div && div.classList.remove('loading');
};

$(window).scroll(function() {
    if ($(this).scrollTop() > 0){
        $('.header-sticky').addClass("sticky");
    }
    else{
        $('.header-sticky').removeClass("sticky");
    }
});

$(window).on("load",function(){
    $(".dropdown-menu-cart-wrapper").mCustomScrollbar({
        axis:"y",
        scrollInertia: 300,
        scrollbarPosition: "outside"
    });


    // var amount=Math.max.apply(Math,$(".product-scroll .product-page-block-images-content").map(function(){return $(this).outerHeight(true);}).get());
    //
    // $(".product-scroll").mCustomScrollbar({
    //     axis:"y",
    //     scrollInertia: 500,
    //     snapAmount:amount,
    //     mouseWheel:{scrollAmount:amount}
    // });
});

$(document).ready(function() {
    $('.btn-lang-link').fancybox({
        hideScrollbar: false,
        baseTpl :
            '<div class="fancybox-container fc-container" role="dialog" tabindex="-1">' +
            '<div class="fancybox-bg"></div>' +
            '<div class="fancybox-inner">' +
            '<div class="fancybox-stage"></div>' +
            '</div>' +
            '</div>',
    });

    $('.navbar-toggler').click(function(){
        $('.navbar-collapse').toggleClass('active');
        $('.navbar-overlay').toggleClass('active');
    });

    $('.navbar-overlay').click(function(){
        $('.navbar-collapse').toggleClass('active');
        $(this).toggleClass('active');
    });

    $('.btn-icon-filter').click(function(){
        $('.sidebar').toggleClass('active');
        $('.header').toggleClass('active');
        $('.sidebar-overlay').toggleClass('active');
    });
    $('.sidebar-overlay').click(function(){
        $('.sidebar').toggleClass('active');
        $('.header').toggleClass('active');
        $(this).toggleClass('active');
    });

    $('.has-children').click(function(){
        $('.hidden').slideToggle('200');
    });

    $('.show-txt').click(function(){
        $('.hidden-txt').slideToggle('200');
        $('.show-txt').fadeOut('200');
    });

    $('.delivery-btn').click(function(){
        $(this).parents('.delivery-item').find('.delivery-item-content').toggleClass('active');
        $(this).parents('.delivery-item').find('.delivery-btn').toggleClass('active');
    });

    $('.product-page-description-button').click(function(){
        $('.product-page-description').toggleClass('active');
    });

    // tooltips

    $('[data-toggle="tooltip"]').tooltip()

    // select

    $('select').selectpicker();

    // fancybox

    $("[data-fancybox]").fancybox({
        autoFocus: false,
    });

    // popovers

    $('[data-toggle="popover"]').popover({
        html:true,
        trigger: 'focus'
    });

    // swiper

    var recommendationsSlider = $('.slider-block-recommendations');
    recommendationsSlider .each(function(){
        var recommendationsSwiper = new Swiper(this, {
            speed: 500,
            spaceBetween: 30,
            slidesPerView:6,
            pagination: {
                el: $(this).parents('.slider-block').find('.swiper-pagination')[0],
                clickable: true,
            },
            breakpoints: {
                1199:{
                    spaceBetween: 30,
                    slidesPerView:4,
                },

                767:{
                    spaceBetween: 30,
                    slidesPerView:3,
                },

                575:{
                    spaceBetween: 30,
                    slidesPerView:2,
                }
            }
        });
    });

    var gallerySlider = $('.slider-block-gallery');
    gallerySlider .each(function(){
        var gallerySwiper = new Swiper(this, {
            speed: 500,
            spaceBetween: 0,
            slidesPerView:1,
            // mousewheel: {
            //     invert: true,
            //     releaseOnEdges: true,
            //     forceToAxis: true,
            //     sensitivity: 999999999,
            //     eventsTarged: '.product-page',
            // },
            // nested: true,
            // touchReleaseOnEdges: true,
            // direction: 'vertical',
            pagination: {
                el: $(this).parents('.slider-block').find('.swiper-pagination')[0],
                clickable: true,
            },
        });
    });



    // footer
    siteFooter();
    $(window).resize(function() {
        siteFooter();
    });

    function siteFooter() {
        var siteContent = $('.main');
        var siteContentHeight = siteContent.height();
        var siteContentWidth = siteContent.width();

        var siteFooter = $('.site-footer');
        var siteFooterHeight = siteFooter.height();
        var siteFooterWidth = siteFooter.width();

        console.log('Content Height = ' + siteContentHeight + 'px');
        console.log('Content Width = ' + siteContentWidth + 'px');
        console.log('Footer Height = ' + siteFooterHeight + 'px');
        console.log('Footer Width = ' + siteFooterWidth + 'px');

        siteContent.css({
            "margin-bottom" : siteFooterHeight + 0
        });
    };

    // animations & parallax
    new WOW().init();

    var controller = new ScrollMagic.Controller();

    var tween = TweenMax.fromTo("#mainFooter", 1,
        {css: { transform: 'translateY(0)'}},
        {css: { transform: 'translateY(250vh)'}}
    );

    var scene = new ScrollMagic.Scene({triggerElement: "#main", duration: "100%", offset: "1000%"})
        .setTween(tween)
        .addTo(controller);

    var tween = TweenMax.fromTo("#recommendations", 1,
        {css: { transform: 'translateY(900%)'}},
        {css: { transform: 'translateY(0)'}}
    );

    var scene = new ScrollMagic.Scene({triggerElement: "#productPage", duration: "100%", offset:  "0"})
        .setTween(tween)
        .addTo(controller);
});