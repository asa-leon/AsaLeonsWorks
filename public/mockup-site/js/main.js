$(document).ready(function(){

    // goTopのスクロール機能
    $(function () {
        $('.goTop').click( function(event) {
            $('html, body').animate({
                scrollTop: 0
            }, 500, 'easeInOutExpo');

            event.preventDefault();
            return false;
        });
    });

    // コラムページのleft-menu-navの挙動
    /*$(window).on('scroll', function () {
        var $window = $(window);
        let $nav = $('#leftMenuNav');
        let headerHeight = $('header').height();
        let defaultNavOffset = $nav.offset();

        if (($window.scrollTop() + headerHeight) > defaultNavOffset.top) {

            $nav.addClass('fixed').css('top', $window.scrollTop() + headerHeight )
            
        };
    });*/
});