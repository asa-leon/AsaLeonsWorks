$(document).ready(function(){

    // goTopのスクロール機能
    $(function scrollToTop() {
        $('.goTop').click( function(event) {
            $('html, body').animate({
                scrollTop: 0
            }, 500, 'easeInOutExpo');

            event.preventDefault();
            return false;
        });
    });
});