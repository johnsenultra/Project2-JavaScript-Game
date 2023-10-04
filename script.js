const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#resetBtn');
const playerOnePick = document.querySelector('#playerOne');
const playerTwoPick = document.querySelector('#playerTwo');
const playerOneScore = document.querySelector('#playerOneScore');
const playerTwoScore = document.querySelector('#playerTwoScore');

let currentScorePlayer1 = 0;
let currentScorePlayer2 = 0;
let alive = true;

startBtn.addEventListener('click', () => {
    if(alive){
        pickLoading()
        setTimeout(startGame, 500)
    }
})

resetBtn.addEventListener('click', () => {
    alive = true;
    currentScorePlayer1 = 0;
    currentScorePlayer2 = 0;
    playerOnePick.textContent = "--";
    playerTwoPick.textContent = "--";
    playerOneScore.innerHTML  = 0;
    playerTwoScore.innerHTML = 0;
})

function pickLoading() {
    playerOnePick.textContent = ". . .";
    playerTwoPick.textContent = ". . .";
}

function startGame() {
    const randomItems = ["Rock", "Paper", "Scissor"];

    let playerOneCard = randomItems[Math.floor(Math.random() * randomItems.length)];
    let playerTwoCard = randomItems[Math.floor(Math.random() * randomItems.length)];

    playerOnePick.textContent = `${playerOneCard}`;
    playerTwoPick.textContent = `${playerTwoCard}`;

    if(playerOneCard == "Rock" && playerTwoCard == "Paper"){
        currentScorePlayer2++;
        playerTwoScore.innerHTML = currentScorePlayer2;
    } else if(playerOneCard === "Paper" && playerTwoCard === "Rock"){
        currentScorePlayer1++;
        playerOneScore.innerHTML = currentScorePlayer1;
    } else if(playerOneCard === "Rock" && playerTwoCard === "Scissor"){
        currentScorePlayer1++;
        playerOneScore.innerHTML = currentScorePlayer1;
    } else if(playerOneCard === "Scissor" && playerTwoCard === "Rock"){
        currentScorePlayer2++;
        playerTwoScore.innerHTML = currentScorePlayer2;
    } else if(playerOneCard === "Scissor" && playerTwoCard === "Paper"){
        currentScorePlayer1++;
        playerOneScore.innerHTML = currentScorePlayer1;
    } else if(playerOneCard === "Paper" && playerTwoCard === "Scissor"){
        currentScorePlayer2++;
        playerTwoScore.innerHTML = currentScorePlayer2;
    } else {
        playerOnePick.textContent = `Draw`
        playerTwoPick.textContent = `Draw`
    }

    if(currentScorePlayer1 === 5){
        alive = false;
        playerOnePick.textContent = `Winner`;
    } else if(currentScorePlayer2 === 5) {
        alive = false;
        playerTwoPick.textContent = `Winner`;
    }
}

