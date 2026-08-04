const colors = ["green", "red", "yellow", "blue"];

let gameSequence = [];
let playerSequence = [];
let level = 0;
let canClick = false;

const levelText = document.getElementById("level");
const startBtn = document.getElementById("start");

startBtn.addEventListener("click", startGame);

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        if (!canClick) return;

        const color = button.dataset.color;
        playerSequence.push(color);

        flash(color);

        checkMove(playerSequence.length - 1);
    });
});

function startGame(){
    level = 0;
    gameSequence = [];
    nextRound();
}

function nextRound(){

    canClick = false;
    playerSequence = [];
    level++;
    levelText.textContent = level;

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    gameSequence.push(randomColor);

    playSequence();
}

function playSequence(){

    let i = 0;

    const interval = setInterval(() => {

        flash(gameSequence[i]);

        i++;

        if(i >= gameSequence.length){
            clearInterval(interval);
            canClick = true;
        }

    }, 700);

}

function flash(color){

    const button = document.querySelector(`[data-color="${color}"]`);

    button.classList.add("active");

    setTimeout(() => {
        button.classList.remove("active");
    },300);

}

function checkMove(index){

    if(playerSequence[index] !== gameSequence[index]){

        alert("Game Over!");

        level = 0;
        gameSequence = [];
        playerSequence = [];
        levelText.textContent = 0;
        canClick = false;

        return;
    }

    if(playerSequence.length === gameSequence.length){

        setTimeout(() => {
            nextRound();
        },1000);

    }

}
