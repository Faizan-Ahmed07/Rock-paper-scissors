function GetRandomChoice() {
    return Math.random()
}
function GetCompInput(){
    let RandomNum= GetRandomChoice();
    if(RandomNum >0.66){
        return "rock";
    }else if(RandomNum > 0.33){
        return "scissors";
    }else{
        return "paper";
    }
}

function GetHumanInput(){
    let inp = prompt("Enter rock, scissors or for paper: ");
    return inp
}



function playMatch(userInput,Choice){

    console.log(`User = ${userInput} vs Computer = ${Choice} `)
    if(userInput === Choice){
        console.log("tie");
    }else if((userInput === "rock" ) && (Choice ==="scissors")){
        console.log("User won");
        return 1;
    }else if((userInput === "rock") && (Choice ==="paper")){
        console.log("Computer won");
        return 0
    }else if((userInput === "scissors") && (Choice ==="rock")){
        console.log("Computer won");
        return 0
    }else if((userInput === "scissors") && (Choice ==="paper")){
        console.log("User won");
        return 1
    }else if((userInput === "paper") && (Choice ==="rock")){
        console.log("User won");
        return 0
    }else if((userInput === "paper") && (Choice ==="scissors")){
        console.log("Computer won");
        return 1
    }
}

let Choice;
let userInput;

let humanScore=0;
let compScore=0;
let currentWin=0;

while (humanScore < 5 && compScore<5){
    Choice = GetCompInput();
    userInput = GetHumanInput();   
    currentWin =  playMatch(userInput,Choice)
    if(currentWin ===1){
        humanScore++;
    }else{
        compScore++;
    }

    console.log(`User score = ${humanScore} and Computer score = ${compScore}`)
    if(humanScore===5){
        console.log("User won the game");
    }
    if(compScore===5){
        console.log("Computer won the game");
    }
}





