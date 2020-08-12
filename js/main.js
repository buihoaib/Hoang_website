$(document).ready(function() {
    /* Back-to-top button */
    $("#back-to-top").click(function() {
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

    /* Change color of header bar */
    $(document).scroll(function() {
        var $header = $("header");
        $header.toggleClass('scrolled', $(this).scrollTop() > $header.height());
    });
});