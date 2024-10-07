// Array de imágenes (simuladas con números en este caso)
const images = ['1', '2', '3', '4', '5', '6', '7', '8'];
const cardsArray = [...images, ...images]; // Duplicamos las imágenes para crear pares
let firstCard, secondCard;
let hasFlippedCard = false;
let lockBoard = false;
let attempts = 0;

const gameBoard = document.getElementById('game-board');
const attemptsCounter = document.getElementById('attempts');

// Barajar las cartas
function shuffle(array) {
  return array.sort(() => 0.5 - Math.random());
}

function createBoard() {
  shuffle(cardsArray);
  cardsArray.forEach((image) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">?</div>
        <div class="card-back">${image}</div>
      </div>
    `;
    card.addEventListener('click', flipCard);
    gameBoard.appendChild(card);
  });
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flipped');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  lockBoard = true;
  const firstCardValue = firstCard.querySelector('.card-back').textContent;
  const secondCardValue = secondCard.querySelector('.card-back').textContent;

  if (firstCardValue === secondCardValue) {
    disableCards();
  } else {
    unflipCards();
  }

  attempts++;
  attemptsCounter.textContent = attempts;
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// Iniciar el juego
createBoard();