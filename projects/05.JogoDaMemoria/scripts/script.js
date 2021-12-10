const FRONT = "card_front"
const BACK = "card_back"

let animals = [
    "dog",
    "koala",
    "rabbit",
    "elephant",
    "cat",
    "bird",
    "duck",
    "fish",
    "frog",
    "butterfly"];

createCardsFromAnimals(animals);
function createCardsFromAnimals(animals) {

    let cards = [];

    for(let animals of animals) {
        cards.push(createCardsFromAnimals(animals));
    }

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

{
    Id
    icon: "animals";
    flipped: false;
}