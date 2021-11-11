let playerScore = 0;
let computerScore = 0;
const h1 = document.querySelector("h1");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const container = document.querySelector(".container");
const score = document.querySelector("p");
const result = document.getElementById("result");

container.addEventListener("click", playerPlay);

function computerPlay() {
	const CHOOSE = ["Rock", "Paper", "Scissors"];
	let compPick = Math.floor(Math.random() * 3);
	return CHOOSE[compPick];
}

function playerPlay(e) {
	if (e.target === rock || e.target === paper || e.target === scissors) {
		let playerPick = e.target.value;
		const computerSelect = computerPlay();
		playRound(playerPick, computerSelect);
	} else {
		return;
	}
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		result.innerText = "It's a tie!";
	} else if (
		(playerSelection === "Rock" && computerSelection === "Scissors") ||
		(playerSelection === "Paper" && computerSelection === "Rock") ||
		(playerSelection === "Scissors" && computerSelection === "Paper")
	) {
		playerScore += 1;
		result.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;
	} else if (
		(playerSelection === "Rock" && computerSelection === "Paper") ||
		(playerSelection === "Paper" && computerSelection === "Scissors") ||
		(playerSelection === "Scissors" && computerSelection === "Rock")
	) {
		computerScore += 1;
		result.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`;
	}

	updateScore();
}

function updateScore() {
	score.innerText = `Score:

        Player: ${playerScore}
        Computer: ${computerScore}
        `;

	if (playerScore == 5) {
		score.innerText = "Congratulations! You win!";
		h1.innerText = "Refresh the browser to play again..";
		result.innerText = "";
		container.removeEventListener("click", playerPlay);
	} else if (computerScore == 5) {
		score.innerHTML =
			"You Lose. Better luck next time!<br><br> <em>Computer says: Ha! you noob!</em>";
		result.innerText = "";
		h1.innerText = "Refresh the browser to play again..";
		container.removeEventListener("click", playerPlay);
	}
}
// completed ui adding
