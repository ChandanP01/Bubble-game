const boxes = document.querySelectorAll('.box');
const btmSec = document.querySelector('.bottom');
let time = 60;
let score = 0;
let hitNum = 0;

function createBubble() {
    for (let i = 1; i <= 160; i++) {
        btmSec.innerHTML += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }
}

function runTimer() {
    const runTime = setInterval(() => {
        if (time > 0) {
            time--;
            boxes[1].textContent = time;
        } else {
            clearInterval(runTime);
            btmSec.innerHTML = `<h1>GAME OVER</h1>`;
            btmSec.innerHTML += `<p>RELOAD THE PAGE FOR PLAY AGAIN</p>`;
            boxes[0].textContent = 0;
        }
    }, 1000);
}

function newHit() {
    hitNum = Math.floor(Math.random() * 10);
    boxes[0].textContent = hitNum;
}

function updateScore() {
    score += 10;
    boxes[2].textContent = `${score}`;
}

btmSec.addEventListener('click',(e)=>{
    clickedNum = Number(e.target.textContent);
    
    if(hitNum === clickedNum){
        updateScore();
        btmSec.innerHTML = "";
        createBubble();
        newHit();
    }
});

createBubble();
runTimer();
newHit();
