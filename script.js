console.log("Hello World")

function getComputerChoice() {
    let x = Math.random()
    if (x <= 0.33) {
        choice = "rock"
        console.log("Computer: " + choice)
        return choice
    }

    else if (0.67<=x>0.33) {
        choice = "paper"
        console.log("Computer: " + choice)
        return choice
    }

    else {
        choice = "scissors"
        console.log("Computer: " + choice)
        return choice
    }

}

function getHumanChoice() {
    check = 0;
    let choice = prompt("Please enter rock paper or scissors: ")
    choice = choice.toLowerCase()
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        check = 1
        console.log("Human: " + choice)
        return choice

    }
    else {
        check = 0
        console.log("invalid choice")
    }
}



let humanScore = 0
let computerScore = 0



function playRound(humanChoice, computerChoice) { 
        
        if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore++;
            console.log("human has won")
        }
        
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++;
            console.log("human has won")
        }

        else if (humanChoice == "paper" && computerChoice == "rock") { 
            humanScore++;
            console.log("human has won")
        }

        else if (humanChoice === computerChoice) { 
            console.log("it is a tie")           
        }

        else if (check === 0) {
            console.log("invalid choice by human")
        }

        else {
            computerScore++
            console.log("computer has won")
        }
}



for (let i = 0; i<5; i++) {
    playRound(getHumanChoice(), getComputerChoice())
    console.log("Human: " + humanScore)
    console.log("Computer: " + computerScore)
}

console.log("GAME OVER")

if (humanScore > computerScore) {
    console.log("Congratulations Human, you are the victor")
}
else if (humanScore < computerScore) { 
    console.log("Unlucky! Try again")
}

else { 
    console.log("The game ends in a tie")
}
