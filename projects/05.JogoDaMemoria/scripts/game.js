let game = {

    lockMode: false,
    firstCard: null,
    secondCard: null,

    setCard: function (id) {

        let card = this.cards.filter(card => card.id === id) [0];

        if(card.flipped || this.lockMode) {
            return false;
        }

        if(!this.firstCard) {
            this.firstCard = card;
            return true;
        } else {
            this.secondCard = card;
            this.lockMode = true;
            return true;
        }
    },

    checkMatch: function() {
        return this.firstCard.icon === this.secondCard.icon;
    },

    clearCards: function () {
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;
    },

    animals: [
        "cao",
        "coala",
        "coelho",
        "elefante",
        "gato",
        "passaro",
        "pato",
        "peixe",
        "ra",
        "borboleta"],

        cards: null,

        createCardsFromAnimals: function () {

            this.cards = [];
            
            this.animals.forEach((animals) => {
                this.cards.push(this.createPairFromAnimals(animals));
            })
        
            this.cards = this.cards.flatMap(pair => pair);
            this.shuffleCards();
            return this.cards;
        
        },
        
        createPairFromAnimals: function (animals) {
        
            return [{
                id: this.createIdWithAnimals(animals),
                icon: animals,
                flipped: false,
            },{
                id: this.createIdWithAnimals(animals),
                icon: animals,
                flipped: false,
            }]
        },
        
        
        createIdWithAnimals: function (animals) {
            return animals + parseInt(Math.random() * 1000)
        },

        shuffleCards: function(cards) {
            let currentIndex = this.cards.length;
            let randomIndex = 0;
        
            while(currentIndex !== 0) {
        
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
        
                [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
            }
        },

}
