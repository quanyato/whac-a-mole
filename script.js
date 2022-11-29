const gameContainer = document.querySelector('.container');
const allMoleItems = document.querySelectorAll('.item');
let startGame, startTime, countDown = 20, score = 0;

const timeCount = document.getElementById('time-count');
const scoreCount = document.getElementById('score-count');

const theme = document.querySelector("theme.mp3");
const scored = new Audio("punch.mp3");
const missed = new Audio("woosh.mp3");

gameContainer.addEventListener('click', function(e){
    if(e.target.classList.contains('mole-clicked')){
        score++;
        scored.play();
        scoreCount.innerHTML = score;

        const bushElem = e.target.parentElement.previousElementSibling;

        let textEl = document.createElement('span');
        textEl.setAttribute('class', 'whack-text');
        textEl.innerHTML = "Huhu!";
        bushElem.appendChild(textEl);

        setTimeout(() => {
            textEl.remove();
        }, 300);
    } else {
        missed.play();
    }
});

//audio play
window.addEventListener("DOMContentLoaded", event => {
  theme.volume = 0.2;
  theme.play();
});

document.addEventListener('DOMContentLoaded', () => {
    // total game time is 20 seconds
    startTime = setInterval(() => {
        timeCount.innerHTML = countDown;
        countDown--;
    }, 1000);
    startGame = setInterval(() => {
        showMole();
    }, 600);
});

// shows mole
function showMole(){
    if(countDown <= 0){
        clearInterval(startGame);
        clearInterval(startTime);
        timeCount.innerHTML = "0";
    }
    let moleToAppear = allMoleItems[getRandomValue()].querySelector('.mole');
    moleToAppear.classList.add('mole-appear');
    hideMole(moleToAppear);
    
}

function getRandomValue(){
    let rand = Math.random() * allMoleItems.length;
    return Math.floor(rand);
}

// hide Mole
function hideMole(moleItem){
    setTimeout(() => {
        moleItem.classList.remove('mole-appear');
    }, 1000);
}
