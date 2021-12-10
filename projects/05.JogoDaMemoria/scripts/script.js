const FRONT = "card_front";
const BACK = "card_back";
const CARD = "card";
const ICON = "icon";
const TURN = "turn_card";

let animals = [
    "cao",
    "coala",
    "coelho",
    "elefante",
    "gato",
    "passaro",
    "pato",
    "peixe",
    "ra",
    "borboleta"];


let cards = null;

startGame();

function startGame() {
    cards = createCardsFromAnimals(animals);
    shuffleCards(cards);
    initializeCards(cards);
}

function initializeCards(cards) {
    let gameBoard = document.getElementById("gameBoard");

    cards.forEach(card => {

        let cardElement = document.createElement("div");
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement);

        cardElement.addEventListener("click", flipCard);
        gameBoard.appendChild(cardElement);

    })



}

function createCardContent(card, cardElement) {

    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);


}

function createCardFace(face, card, element) {

    let cardElementFace = document.createElement("div");
    cardElementFace.classList.add();
    if(face === FRONT) {
        let iconElement = document.createElement('img');
        iconElement.classList.add(ICON);
        iconElement.src = "./images/" + card.icon + ".png";
        cardElementFace.appendChild(iconElement);
    } else {
        let turnElement = document.createElement('img');
        turnElement.classList.add(TURN);
        turnElement.src = "./images/memoria.png";
    }
    element.appendChild(cardElementFace);
}

function shuffleCards(cards) {
    let currentIndex = cards.length;
    let randomIndex = 0;

    while(currentIndex !== 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [cards[randomIndex]], cards[currentIndex] = cards[currentIndex], [cards[randomIndex]]
    }
}

function createCardsFromAnimals(animals) {

    let cards = [];
    
    animals.forEach((animals) => {
        cards.push(createPairFromAnimals(animals));
    })

    return cards.flatMap(pair => pair);

}

function createPairFromAnimals(animals) {

    return [{
        id: createIdWithAnimals(animals),
        icon: animals,
        flipped: false,
    },{
        id: createIdWithAnimals(animals),
        icon: animals,
        flipped: false,
    }]
}


function createIdWithAnimals(animals) {
    return animals + parseInt(Math.random() * 1000);
}

function flipCard() {

this.classList.add("flip");

}