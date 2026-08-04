const emojis = [
    "🍎","🍌","🍇","🍓",
    "🍎","🍌","🍇","🍓"
];

let board = document.getElementById("gameBoard");
let movesElement = document.getElementById("moves");
let result = document.getElementById("result");

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matches = 0;

// Embaralhar
emojis.sort(() => Math.random() - 0.5);

// Criar cartas
emojis.forEach(emoji => {

    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.emoji = emoji;

    card.innerHTML = `
        <div class="front">${emoji}</div>
        <div class="back"></div>
    `;

    card.addEventListener("click", flipCard);

    board.appendChild(card);
});

function flipCard(){

    if(lockBoard) return;

    if(this === firstCard) return;

    this.classList.add("flip");

    if(!firstCard){
        firstCard = this;
        return;
    }

    secondCard = this;
    moves++;
    movesElement.textContent = moves;

    checkMatch();
}

function checkMatch(){

    const isMatch =
        firstCard.dataset.emoji === secondCard.dataset.emoji;

    if(isMatch){
        disableCards();
    }else{
        unflipCards();
    }
}

function disableCards(){

    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    matches++;

    resetBoard();

    if(matches === emojis.length / 2){
        result.textContent =
        `🎉 Parabéns! Você venceu em ${moves} tentativas.`;
    }
}

function unflipCards(){

    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        resetBoard();
    },1000);

}

function resetBoard(){
    [firstCard, secondCard, lockBoard] = [null, null, false];
}