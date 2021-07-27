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

    // コラムページのleft-menu-navの挙動
    $(window).scroll(function leftMenuMovement() {
        let screenHeight = window.screen.height
        let navOffset = $('#leftMenuNav').offset();

        let offsetX = navOffset.left;
        let offsetY = navOffset.top;
        console.log(offsetY);

        if (offsetY > $('header').height) {
            console.log("over header");

            //offsetY = 
        };

    });
});