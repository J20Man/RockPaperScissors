var UserScore = 0;
var CompScore = 0;

function getComputerChoice() {
    const num = Math.random();
    var CompChoice;
    
    if (num <= 0.3) {
        CompChoice = "Rock";
    } else if (num > 0.3 && num <= 0.6){
        CompChoice = "Scissors";
    } else {
        CompChoice = "Paper";
    }

    console.log(CompChoice);
}

function getUserChoice() {
    var UserChoice = prompt("Please enter you're choice ")
    console.log(UserChoice)
}

getComputerChoice();
getUserChoice();