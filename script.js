
let HmScore = 0
let PcScore = 0

function playRound(humanChoice, computerChoice){

    if (humanChoice == computerChoice){
        //empate
    }
    else if ( humanChoice == 1 && computerChoice == 2){
        PcScore ++
    }
    else if ( humanChoice == 2 && computerChoice == 1){
        HmScore ++
    }
    else if ( humanChoice == 3 && computerChoice == 2){
        HmScore ++
    }
    else if ( humanChoice == 2 && computerChoice == 3){
        PcScore ++
    }
    else if ( humanChoice == 1 && computerChoice == 3){
        HmScore ++
    }
    else if ( humanChoice == 3 && computerChoice == 1){
        PcScore ++
    }
    console.log("HumanScore:" + HmScore + "Jogou: " + humanChoice)
    console.log("PcScore:" + PcScore + "Jogou: " + computerChoice)
}


function playGame(){
    for(let i = 0; i < 5; i++){
        let HumanSelection = getHumanChoice();
        let ComputerSelection = getComputerChoice();
        playRound(HumanSelection,ComputerSelection); 
    }

}
playGame();


function getComputerChoice(){
    let pcChoice = Math.floor(Math.random()*3)+1
    return pcChoice
    console.log(" getPcchoice :" + pcChoice)
}

function getHumanChoice(){
    let promptChoice = prompt("Enter (rock, paper or scissors):");
    let HmChoice = promptChoice.toLocaleLowerCase()
    if (HmChoice == 'rock'){
        HmChoice = 1 
    }
    if (HmChoice == 'paper'){
        HmChoice = 2 
    }
    if (HmChoice == 'scissors'){
        HmChoice = 3
    }
    return HmChoice
    console.log(" getHumanchoice :" + HmChoice)
}