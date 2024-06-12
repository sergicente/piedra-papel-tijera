//Variables
let humanScore = 0;
let computerScore = 0;
playGame();

function getHumanChoice(){
    let escoje = prompt('1.Piedra  2.Papel o  3.Tijera');
    let opcionHumano;
    if(escoje == 1){
        opcionHumano = 'Piedra';
    }else if(escoje == 2){
        opcionHumano = 'Papel';
    }else{
        opcionHumano = 'Tijera';
    };
    return opcionHumano;
}

function getComputerChoice(){
    let numeroRandom = Math.random();
    let opcionMaquina;
    if(numeroRandom<0.33){
        opcionMaquina = 'Piedra';
    }else if(numeroRandom>= 0.33 && numeroRandom < 0.66){
        opcionMaquina = 'Papel';
    }else{
        opcionMaquina = 'Tijera';
    };
    return opcionMaquina;
}



function playRound(humanChoice, computerChoice){
    console.log(`${humanChoice} VS ${computerChoice}`);
    if(humanChoice == 'Piedra'){
        if(computerChoice == 'Piedra'){
            console.log('Empate!');
        }
        if(computerChoice == 'Papel'){
            console.log('Pierdes!');
            ++computerScore;
        }
        if(computerChoice == 'Tijeras'){
            console.log('Ganas!');
            ++humanScore;
        }
    }
    if(humanChoice == 'Papel'){
        if(computerChoice == 'Piedra'){
            console.log('Ganas!');
            ++humanScore;
        }
        if(computerChoice == 'Papel'){
            console.log('Empate!');
        }
        if(computerChoice == 'Tijeras'){
            console.log('Pierdes!');
            ++computerScore;
        }
    }
    if(humanChoice == 'Tijera'){
        if(computerChoice == 'Piedra'){
            console.log('Pierdes!');
            ++computerScore;
        }
        if(computerChoice == 'Papel'){
            console.log('Ganas!');
            ++humanScore;
        }
        if(computerChoice == 'Tijeras'){
            console.log('Empate!');
        }
    }



}

function playGame(){
    for(let i = 1; i<=5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log(`Puntuaciones: Humano ${humanScore}, Máquina ${computerScore}`);
}