function cardFlip() {
  let cards = document.querySelectorAll('.card')
    cards.forEach(card => {
      card.addEventListener( 'mouseenter', function() {
      card.classList.toggle('is-flipped');
    });
  });
}

export { cardFlip };
