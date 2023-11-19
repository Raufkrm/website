const CONTAINER = document.querySelector('.container')
//append rnd here when scrolling
const URL = 'http://127.0.0.1:5500/images'

window.addEventListener("load", loaded)
window.addEventListener("scroll", scroll)

function loaded(){
    let test = document.getElementById('test');
    loadCards();
}

function loadCards(numCards = 10){
    let i = 0;
    Array 
    while(i < numCards){
        const card = document.createElement('img')
        card.src = `${URL}${getRandNum()}`
        CONTAINER.appendChild(card)
        i++
    }
}

function getRandNum(){
    return Math.floor(Math.random() * 6);
}

function scroll(){

}
