console.log("Hello World")

function getComputerChoice() {
    let x = Math.random()

    if (x <= 0.33) {
        return "Rock"
    }

    else if (0.67<=x>0.33) {
        return "Paper"
    }

    else {
        return "Scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("Please enter rock paper or scissors: ")
}

console.log(getComputerChoice())