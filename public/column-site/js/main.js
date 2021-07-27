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
    $(window).on('scroll', function () {
        let $window = $(window),
        $nav = $('#leftMenuNav'),
        defaultPositionTop = $('header').height(),
        setOffsetPosition = $nav.offset(),
        fixedClassName = 'fixed';

        if ($(this).scrollTop() > defaultPositionTop) {
            $nav.addClass(fixedClassName).css('top', defaultPositionTop + $(this).scrollTop() - defaultPositionTop + 'px');
        } else {
            $('.' + fixedClassName).css('top', 0);
            $nav.removeClass(fixedClassName);
        }
    });
});