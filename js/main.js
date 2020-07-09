function menuClicked() {
    var items = document.getElementById("nav-bar");
    if (items.style.display === "none") {
        items.style.display = "block";
    } else {
        items.style.display = "none";
    }
}

/* var currentSlideIndex = 0;
showSlide(currentSlideIndex);

function nextSlide(i) {
    currentSlideIndex += i;
    if (currentSlideIndex <= -1) {
        currentSlideIndex = 5;
    }
    showSlide(i);
}

function showSlide(i) {
    var slides = document.getElementsByClassName("img-item");
    slides[i].style.display = "block";
}*/