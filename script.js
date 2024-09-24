const options = ["Rock", "Paper", "Scissor"];

function getComputerRandom() {
    console.log(options[Math.floor(Math.random() * options.length)]);
    return options[Math.floor(Math.random() * options.length)];
}

function hasPlayerWonTheRound(player, computer) {

    return ((player === "Rock" && computer === "Scissor") ||
        (player === "Scissor" && computer === "Paper") ||
        (player === "Paper" && computer === "Rock"));
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {

    const computerResult = getComputerRandom();

    if (hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore += 1;
        return "Player Wins! " + userOption + " beats " + computerResult;
    }

    else if (userOption == computerResult) {
        return "It's a tie Both chooses " + userOption;
    }

    else {
        computerScore += 1;
        return "Computer Wins! " + computerResult + " beats " + userOption;
    }

}

const playerScoreBar = document.getElementById("playerScore");
const computerScoreBar = document.getElementById("computerScore");
const winnerBoard = document.getElementById("winnerBoard");
const scoreBoard = document.getElementById("scoreBoard");

const resetBtn = document.getElementById('reset');
const controlBtns = document.getElementById('optionContainer');

function showResults(userOption) {

    scoreBoard.innerText = getRoundResults(userOption);
    playerScoreBar.innerText = playerScore;
    computerScoreBar.innerText = computerScore;


    if (playerScore == 3 || computerScore == 3) {
        winnerBoard.innerText = `${playerScore == 3 ? "Player " : "Computer "}Won The Match`;
        resetBtn.style.display = "block";
       controlBtns.style.display = "none";
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreBar.innerText = playerScore;
    computerScoreBar.innerText = computerScore;
    winnerBoard.innerText = "";
    scoreBoard.innerText = "";
    resetBtn.style.display = "none";
    controlBtns.style.display = "flex";
};

document.getElementById('reset').addEventListener("click", () => {
    resetGame();
});


document.getElementById('rock').addEventListener("click", function () {
    showResults("Rock");
});

document.getElementById('paper').addEventListener("click", function () {
    showResults("Paper");
});

document.getElementById('scissor').addEventListener("click", function () {
    showResults("Scissors");
});

document.getElementById('rulesContainer').addEventListener("click",()=>{
    let icon=document.getElementById('icon');
    icon.classList.toggle('active');
    let rulesBox=document.getElementById('rules');
    rulesBox.classList.toggle('collapse');
});
