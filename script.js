var UserScore = 0;
var CompScore = 0;
// Rock = 1
// Scissors = 2
// Paper = 3
function getComputerChoice() {
    const num = Math.random();
    var CompChoice;
    
    if (num <= 0.3) {
        CompChoice = 1;
    } else if (num > 0.3 && num <= 0.6){
        CompChoice = 2;
    } else {
        CompChoice = 3;
    }

    return CompChoice;
}

function getUserChoice() {
    var UserChoice = prompt("Please enter your choice ");
    return UserChoice;
}

function playRound(User, Comp) {
      var calculator = 0;
    const humanSelction = getUserChoice().toLowerCase;
    const ComputerSelection = getComputerChoice();

    if (User == "rock") {
        calculator = 1;
    } else if (User == "scissors") {
        calculator = 2;
    } else {
        calculator = 3;
    }

    if (calculator == 1 && Comp == 2){
        console.log("Congradulations, you win!");
        UserScore = UserScore + 1;
    } else if (calculator == 2 && Comp == 3){
        console.log("Congradulations, you win!");
        UserScore = UserScore + 1;
    } else if (calculator == 3 && Comp == 1){
        console.log("Congradulations, you win!");
        UserScore = UserScore + 1;

    } else if (calculator == 2 && Comp == 1){
        console.log("I'm sorry, you lose");
        CompScore = CompScore + 1;
    } else if (calculator == 3 && Comp == 2){
        console.log("I'm sorry, you lose");
        CompScore = CompScore + 1;
    } else if (calculator == 1 && Comp == 3){
        console.log("I'm sorry, you lose");
        CompScore = CompScore + 1;
    } else {
        console.log("I'm sorry it's a tie!")
    }
      
}

playRound()