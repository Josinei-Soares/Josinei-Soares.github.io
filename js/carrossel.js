
let indice = 0;
function moverSlide(direcao) {
const slides = document.getElementById('slides');
const totalSlides = slides.children.length;
indice = (indice + direcao + totalSlides) % totalSlides;
slides.style.transform = `translateX(-${indice * 100}%)`;
}

const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let index = 0;

function nextSlide() {
    index = (index + 1) % slideCount;
    slides.style.transform = `translateX(-${index * 100}%)`;
}

// Troca de slide a cada 5 segundos (5000 ms)
setInterval(nextSlide, 5000);