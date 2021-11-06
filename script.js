function computerPlay() {
	let randomNumber = Math.floor(Math.random() * 3);
	switch (randomNumber) {
		case 0:
			return "ROCK";
			break;
		case 1:
			return "PAPER";
			break;
		case 2:
			return "SCISSORS";
			break;
	}
}
const computerSelection = computerPlay();

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

function game(i) {
	for (let a = 0; a <= i; a++) {
		console.log(playRound(playerSelection, computerSelection));
	}
}
