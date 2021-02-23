const slider = document.querySelector('.lp-slider');
const slides = document.querySelectorAll('.lp-slide');

let i = 0;

showSlides();

function showSlides() {
    slider.style.transform = `translateX(${-i * 33.33}%)`;
    slider.style.transition = `0.5s ease`;
    i++;

    if(i === slides.length) {
        i = 0;
    };
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}