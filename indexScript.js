const CONTAINER = document.querySelector('.container');
const URL = 'http://127.0.0.1:5500/images/';
//const IMAGE_EXTENSIONS = ['.jpg', '.png', '.jpeg'];

window.addEventListener("load", loaded);
window.addEventListener("scroll", scroll);

function loaded() {
    let test = document.getElementById('test');
    loadCards();
}

function loadCards(numCards = 10) {
    let i = 0;
    while (i < numCards) {
        const card = document.createElement('img');
        const randNum = getRandNum();
        card.src = `${URL}${randNum}.jpg`;
        CONTAINER.appendChild(card);
        i++;
    }
}

function getRandNum() {
    return Math.floor(Math.random() * 6);
}

function getFiles(){
    
}


function scroll() {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        loadCards()
    }
}
