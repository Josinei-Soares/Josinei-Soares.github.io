
// FUNÇÃO DE MOVIMENTO DO CARROSSEL
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



// FUNÇÃO PARA REDIRECIONADO POST DA GALERIA PARA O INSTAGRAM

// 1. Seleciona TODAS as imagens que têm a classe "post".
// O resultado é uma lista de elementos.
const imagensDaGaleria = document.querySelectorAll('.post');

// 2. Itera (passa por cada uma) sobre a lista de imagens encontradas.
imagensDaGaleria.forEach(imagem => {
    
    // 3. Adiciona um "ouvinte" de evento de clique a cada imagem individualmente.
    imagem.addEventListener('click', function() {
    
    // 4. Dentro da função de clique, 'this' se refere à imagem específica que foi clicada.
    // 5. Pega o URL que guardamos no atributo 'data-post-url' da imagem clicada.
    const urlDoPost = this.dataset.postUrl;
    
    // 6. Redireciona o navegador para a URL do post, se ela existir.
    if (urlDoPost) {
        window.location.href = urlDoPost;
    }
    });
});



