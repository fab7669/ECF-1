let currentSlide = 0; 
const slides = document.querySelectorAll('.slide'); 
const totalSlides = slides.length; 
function changeSlide(direction) 
{ currentSlide += direction; 
    if (currentSlide >= totalSlides) { currentSlide = 0; } 
    else if (currentSlide < 0) { currentSlide = totalSlides - 1; } 
    document.querySelector('.slides').style.transform = `translateX(${-currentSlide * 100}%)`; 
} setInterval(() => { changeSlide(1); }, 3000);