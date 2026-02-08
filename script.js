// Efecto flip para tarjetas en dispositivos móviles
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card-interactive');
  
  cards.forEach(card => {
    let isFlipped = false;
    
    card.addEventListener('click', function(e) {
      // Si está en escritorio, no hacer nada (se maneja con CSS hover)
      if (window.innerWidth > 768) {
        return;
      }
      
      e.preventDefault();
      isFlipped = !isFlipped;
      
      const cardFront = this.querySelector('.card-front');
      const cardBack = this.querySelector('.card-back');
      
      if (isFlipped) {
        cardFront.style.opacity = '0';
        cardFront.style.zIndex = '1';
        cardBack.style.opacity = '1';
        cardBack.style.zIndex = '2';
      } else {
        cardFront.style.opacity = '1';
        cardFront.style.zIndex = '2';
        cardBack.style.opacity = '0';
        cardBack.style.zIndex = '1';
      }
    });
  });
  
  // Cerrar tarjeta al salir del viewport en móvil
  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768 && !e.target.closest('.card-interactive')) {
      cards.forEach(card => {
        const cardFront = card.querySelector('.card-front');
        const cardBack = card.querySelector('.card-back');
        cardFront.style.opacity = '1';
        cardFront.style.zIndex = '2';
        cardBack.style.opacity = '0';
        cardBack.style.zIndex = '1';
      });
    }
  });
});
