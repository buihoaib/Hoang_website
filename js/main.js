$(document).ready(function() {
    /* Change color of header bar */
    $(document).scroll(function() {
        var $header = $("header");
        $header.toggleClass('scrolled', $(this).scrollTop() > $header.height());
    });

    /* Show/hide overlay nav */
    $("#hambuger-menu").click(function(e) {
        e.preventDefault();
        $("#mobile-overlay-nav").toggleClass("active");
        $("body").css("position", "fixed");
        $("body").css("overflowY", "scroll");
    });
    $("#close-menu").click(function(e) {
        e.preventDefault();
        $("#mobile-overlay-nav").toggleClass("active");
        $("body").css("position", "static");
        $("body").css("overflowY", "auto");
    });

    /* Center slick carousel */
    $('.slideshow').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: document.getElementById("slide-previous"),
        nextArrow: document.getElementById("slide-next")
    });
});

AOS.init({
    duration: 1200,
})

/* Slidershow */
/*var slideIndex = 1;
window.addEventListener("load", function() {
    showSlides(slideIndex);
    myTimer = setInterval(function() { plusSlides(1) }, 3000);
})

function plusSlides(n) {
    clearInterval(myTimer);
    if (n < 0) {
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1);
    }
    if (n === -1) {
        myTimer = setInterval(function() { plusSlides(n + 2) }, 3000);
    } else {
        myTimer = setInterval(function() { plusSlides(n + 1) }, 3000);
    }
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide-image");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}*/