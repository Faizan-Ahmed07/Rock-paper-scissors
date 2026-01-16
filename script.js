const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const score = document.getElementById('score');
const result = document.getElementById('result');
const won = document.getElementById('won');
// rock.addEventListener('click',GetHumanInput(rock));
// paper.addEventListener('click',GetHumanInput(paper));
// scissors.addEventListener('click',GetHumanInput(scissors));

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

// function GetHumanInput(){
    rock.addEventListener('click',()=>{
        playMatch("rock")
    })
    paper.addEventListener('click',()=>{
        playMatch("paper")
    })
    scissors.addEventListener('click',()=>{
        playMatch("scissors")
    })
// }



function playMatch(userInput){
    let Choice=GetCompInput()
    result.innerText=`User: ${userInput} VS Computer: ${Choice} `
    if(userInput === Choice){
       won.innerText="tie"
    }else if((userInput === "rock" ) && (Choice ==="scissors")){
        won.innerText="User won";
        humanScore++;
      
    }else if((userInput === "rock") && (Choice ==="paper")){
        won.innerText="Computer won"
        compScore++;

    }else if((userInput === "scissors") && (Choice ==="rock")){
       won.innerText="Computer won"
            compScore++;
       
    }else if((userInput === "scissors") && (Choice ==="paper")){
            won.innerText="User won";
        humanScore++;
   
    }else if((userInput === "paper") && (Choice ==="rock")){
            won.innerText="User won";
        humanScore++;
       
    }else if((userInput === "paper") && (Choice ==="scissors")){
        won.innerText="Computer won"
            compScore++;
    }
    score.innerText = `${humanScore}-${compScore}`
}

// let Choice;
// let userInput;

let humanScore=0;
let compScore=0;
let currentWin=0;

// while (humanScore < 5 && compScore<5){
//     Choice = GetCompInput();
//      console.log(GetHumanInput());  
//     userInput = GetHumanInput();   
//     currentWin =  playMatch(userInput,Choice)
//     if(currentWin ===1){
//         humanScore++;
//     }else{
//         compScore++;
//     }

//     console.log(`User score = ${humanScore} and Computer score = ${compScore}`)
//     if(humanScore===5){
//         console.log("User won the game");
//     }
//     if(compScore===5){
//         console.log("Computer won the game");
//     }
// }





