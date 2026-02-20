
let HmScore = 0
let PcScore = 0

let botoes = document.getElementById("botoes")

let rock = document.getElementById("1-rock")
let paper = document.getElementById("2-paper")
let scissor = document.getElementById("3-scissor")
let resultado = document.getElementById("resultado")

botoes.addEventListener("click",(event)=>{
    let alvo = event.target.id
    switch(alvo){
        case '1-rock':
        playRound(1,getComputerChoice())
        break;

        case '2-paper':
        playRound(2,getComputerChoice())
        break;
        
        case '3-scissor':
        playRound(3,getComputerChoice())
        break;
   }
})


function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
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
    
    if(PcScore == 5){
        resultado.textContent = "PC WIN :("
        HmScore = 0
        PcScore = 0
    }
    else if(HmScore == 5){
        resultado.textContent = "YOU WIN !!!"
        HmScore = 0
        PcScore = 0
    }
    else{
    resultado.textContent = "You:" + HmScore + "  PC:" + PcScore
    }
}


function getComputerChoice(){
    let pcChoice = Math.floor(Math.random()*3)+1
    return pcChoice
}

