
function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "Rock"
    } else if (choice === 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function playRound() {
    const computerSelection = computerPlay()
    let playerSelection = prompt("Choose Rock, Paper, or Scissors")
    let normalizedSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    let playerScore = 0
    let computerScore = 0
    if (normalizedSelection === computerSelection) {
        return "It's a tie, try again"
    }  
    else if (normalizedSelection === "Rock" && computerSelection === "Paper") {
        return "You lose, Paper beats Rock"
    }
    else if (normalizedSelection === "Rock" && computerSelection === "Scissors") {
        return "You win, Rock beats Scissors"
    }
    else if (normalizedSelection === "Paper" && computerSelection === "Rock") {
        return "You win, Paper beats Rock"
    }
    else if (normalizedSelection === "Paper" && computerSelection === "Scissors") {
        return "You lose, Scissors beats Paper"
    }
    else if (normalizedSelection === "Scissors" && computerSelection === "Rock") {
        return "You lose, Rock beats Scissors"
    }
    else if (normalizedSelection === "Scissors" && computerSelection === "Paper") {
        return "You win, Scissors beats Paper"
    }
    else {
        return "I don't think you chose correctly"
    }

}


console.log(playRound())