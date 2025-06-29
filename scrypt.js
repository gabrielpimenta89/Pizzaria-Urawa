const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = 'translateX(' + (-slideWidth * currentIndex) + 'px)';
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

// Inicializa o carrossel
updateCarousel();

// Função para adicionar itens ao carrinho
function addToCart(pizzaName, price) {
    alert(`Você adicionou ${pizzaName} ao carrinho por R$ ${price.toFixed(2)}!`);
}