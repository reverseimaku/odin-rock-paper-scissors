// Exercise from: https://www.theodinproject.com/lessons/foundations-rock-paper-scissors

function playerSelection() {
    let user = prompt("What is your choice?");
    choice = user.toLowerCase();
    console.log(choice);
    switch(choice) {
        case "rock":
        case "scissors":
        case "paper":
            return choice;
        default:
            console.log("Please try again.");
    }
};

function getComputerChoice() {
    num = Math.floor(Math.random() * 3);
    let choice = "";

    if (num === 0)
    {
        choice = "rock";
    }
    if (num === 1)
    {
        choice = "paper";
    }
    if (num === 2)
    {
        choice = "scissors";
    }
    console.log(`Computer picked ${choice}`);
    
    return choice;
}

function playRound(playerSelect, computerSelection) {

    if (playerSelect === "paper" && computerSelection == "scissors" ||
        playerSelect === "rock" && computerSelection === "paper" ||
        playerSelect === "scissors" && computerSelection === "rock")
    {
        let comSel = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
        let playerSel = playerSelect.charAt(0).toUpperCase() + playerSelect.slice(1);
        console.log(`You Lose! ${comSel} beats ${playerSel}`);
    }

    if (computerSelection === "paper" && playerSelect == "scissors" ||
    computerSelection === "rock" && playerSelect === "paper" ||
    computerSelection === "scissors" && playerSelect === "rock")
    {
        let comSel = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
        let playerSel = playerSelect.charAt(0).toUpperCase() + playerSelect.slice(1);
        console.log(`You Win! ${playerSel} beats ${comSel}`);
    } 
    else
    {
        console.log("You tied");
    }

}


function game() {
    for (i=0; i<5; i++) {
        let playerSelect = playerSelection();
        let computerSelection = getComputerChoice();
        playRound(playerSelect, computerSelection);
    }
}

game();