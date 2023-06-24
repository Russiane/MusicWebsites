// Auto slider
const sliderRadios = document.querySelectorAll('input[name="slider"]');
let currentSlide = 0;

function showSlide() {
    sliderRadios[currentSlide].checked = true;
}

function autoSlide() {
    currentSlide = (currentSlide + 1) % sliderRadios.length;
    showSlide();
}

setInterval(autoSlide, 3200); // Change slide every 3 seconds