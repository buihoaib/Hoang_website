/* Hambuger menu */
function menuClicked() {
    var items = document.getElementById("nav-bar");
    if (items.style.display === "none") {
        items.style.display = "block";
    } else {
        items.style.display = "none";
    }
}

/* Slideshow */
var slideIndex = 0;
autoShowSlide();

function autoShowSlide() {
    var slides = document.getElementsByClassName("slider-item");
    var len = slides.length;
    for (var i = 0; i < len; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex >= len) {
        slideIndex = 0;
    }

    slides[slideIndex].style.display = "block";
    setTimeout(autoShowSlide, 2000);
}