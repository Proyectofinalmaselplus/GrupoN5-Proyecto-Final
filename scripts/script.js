
let currentIndex = 0;
const slides = document.querySelectorAll("#slider-wrapper section");
const totalSlides = slides.length;

document.getElementById("slide-left").addEventListener("click", function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : 0;
    updateSliderPosition();
});

document.getElementById("slide-right").addEventListener("click", function() {
    currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : totalSlides - 1;
    updateSliderPosition();
});

function updateSliderPosition() {
    const sliderWrapper = document.getElementById("slider-wrapper");
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}
