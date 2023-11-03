const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerHand: '',
    aiHand: '',
}

const hands = [...document.querySelectorAll('.select img')];

// Wybieram obrazek
function handSelection(){
    game.playerHand = this.dataset.option;

    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px #444';
}

function checkResult(player, ai){
    if(player === ai){
        return 'draw';
    }else if((player === 'papier' && ai === 'kamień') || (player === 'kamień' && ai === 'nożyczki') || (player === 'nożyczki' && ai === 'papier')){
        return 'win';
    }else {return 'loss';}
}

//Publikacja wyniku
function publishResult(gameResult){
    document.querySelector('[data-summary="your-choice"]').textContent = game.playerHand;

    document.querySelector('[data-summary="ai-choice"]').textContent = game.aiHand;

    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;

    if(gameResult === 'win') {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;

        document.querySelector('[data-summary="who-win"]').textContent = "Wygrałeś rundę!";
        document.querySelector('[data-summary="who-win"]').style.color = 'green';
    }else if(gameResult === 'loss') {
        document.querySelector('p.losses span').textContent = ++gameSummary.losses;

        document.querySelector('[data-summary="who-win"]').textContent = "Komputer wygrał rundę! :(";
        document.querySelector('[data-summary="who-win"]').style.color = 'red';
    }else{
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;

        document.querySelector('[data-summary="who-win"]').textContent = "Remis!";
        document.querySelector('[data-summary="who-win"]').style.color = 'black';
    }
}

//start gry => funkcja sterująca
function startGame(){
    if(!game.playerHand) 
    return alert('Wybierz dłoń!');

    game.aiHand = computerChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);

    publishResult(gameResult);
    endGame();

}

function computerChoice(){
    return hands[Math.floor(Math.random()*3)].dataset.option;
}

function endGame(){
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = '';

    game.playerHand = '';
    game.aiHand = '';
}

hands.forEach(hand => {
    hand.addEventListener('click', handSelection);
})

document.querySelector('.start').addEventListener('click', startGame);
