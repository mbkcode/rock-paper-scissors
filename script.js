function computerPlay() {
	if (Math.floor(Math.random() * 3) === 0) {
		return "Rock";
	} else if (Math.floor(Math.random() * 3) === 1) {
		return "Paper";
	} else if (Math.floor(Math.random() * 3) === 2) {
		return "Scissor";
	}
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toUpperCase();
	computerSelection = computerSelection.toUpperCase();
	if (playerSelection == computerSelection) {
		return "Its a tie, try again";
	} else if (playerSelection == "ROCK") {
		if (computerSelection == "SCISSORS") {
			return "You Won! Rock beats Scissors";
		} else {
			return "You Lost! Paper beats Rock";
		}
	} else if (playerSelection == "SCISSORS") {
		if (computerSelection == "PAPER") {
			return "You Won! Scissors beats Paper";
		} else {
			return "You Lost! Rock beats Scissors";
		}
	} else if (playerSelection == "PAPER") {
		if (computerSelection == "ROCK") {
			return "You Won! Paper beats Rock";
		} else {
			return "You Lost! Scissors beats Paper";
		}
	} else {
		return "Invalid input";
	}
}
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
