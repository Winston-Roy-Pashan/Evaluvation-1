/*

Develop program that works with playing cards and decks of cards.
There are 52 cards in a standard deck. Each card belongs to one of four suits and one of 13 ranks. 
The suits are Clubs, Diamonds, Hearts, and Spades. The ranks are Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, and King.
In our game, 
Clubs < Diamonds < Hearts < Spades
Ace < 2 < 3 < 4 < 5 < 6 < 7 < 8 < 9 < 10 < Jack < Queen < King
When suits are the same, check the ranks for comparision.
You can  use a class to represent a deck of cards. When a deck is created it is sorted from low to high value cards.

For most card games, you have to shuffle the deck; that is, put the cards in a random order. So, your deck should be
possible to be shuffled.

One possibility is to model the way humans shuffle; for example, we could divide the deck in two halves and then choose alternately from each one. 
Humans usually don’t shuffle perfectly, so after about seven iterations, the order of the deck is pretty well randomized.

But a computer program would have the annoying property of doing a perfect shuffle every time, which is not very random. 
In fact, after eight perfect shuffles, you would find the deck back in the order you started in! 
For more on this, see https://en.wikipedia.org/wiki/Faro_shuffle.

A better shuffling algorithm is to traverse the deck one card at a time, and at each iteration, choose two cards and swap them. 
To outline this algorithm in pseudo code,



Using these classes developed so for, implement Crazy Eights game (https://en.wikipedia.org/wiki/Crazy_Eights).
Crazy Eights is a classic card game for two or more players. The main objective is to be the first player to get rid of all your cards. 
Here’s how to play:

1. Deal five or more cards to each player, and then deal one card face up to create the “discard pile”. 
Place the remaining cards face down to create the “draw pile”.
2. Each player takes turns placing a single card on the discard pile. 
The card must match the rank or suit of the previously played card, or be an eight, which is a “wild card”.
3. When players don’t have a matching card or an eight, they must draw new cards until they get one.
4. If the draw pile ever runs out, the discard pile is shuffled (except the top card) and becomes the new draw pile.
5. As soon as a player has no cards, the game ends, and all other players score penalty points for their remaining cards. 
   Eights are worth 20, face cards(ace, jack, queen, king)  are worth 10, and all others are worth their rank.

To implement Crazy Eights, we need to represent a deck of cards, a discard pile, a draw pile, and a hand for each player. 
And we need to be able to deal, draw, and discard cards.

Hint: Implement a CardCollection and have Deck, Hand (a way to represent a hand, which is the collection of cards held by a player),
a Pile, which is a collection of cards on the table inherit from CardCollection. 
To begin the game, we need to deal cards to each of the players. And during the game, we need to move cards between hands and piles.
You can have two classes: Player, which encapsulates player strategy, and Eights, which creates and maintains the state of the game.
A typical outline of game logic is below:
*/
'use strict';


class Card {
    constructor(suit, rank, value) {
        let suitValue;
        this.suit = suit;
        this.rank = rank;
        if (this.suit === 'clubs') {
            suitValue = 0;
        } else if (this.suit === 'diamonds') {
            suitValue = 13;
        } else if (this.suit === 'hearts') {
            suitValue = 26;
        } else {
            suitValue = 39;
        }
        this.value = value + suitValue;
    }
}
class Deck {
    constructor() {
        this.cards = [];
    }
    createDeck() {
        let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
        let ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], values[j]));
            }
        }
    }

    shuffleDeck() {
        // choose a random number between i and length - 1
        // swap the ith card and the randomly-chosen card
        let temp1, temp2;
        for (let i = 0; i < this.cards.length - 1; i++) {
            temp1 = Math.floor((Math.random() * this.cards.length));
            temp2 = this.cards[temp1];
            this.cards[temp1] = this.cards[i];
            this.cards[i] = temp2;
        }
    }
    sortDeck(cards) {
        for (let i = 0; i < cards.length - 1; i++) {
            for (let j = 1; j < cards.length; j++) {
                if (cards[j].value < cards[j - 1].value) {
                    let temp;
                    temp = cards[j];
                    cards[j] = cards[j - 1];
                    cards[j - 1] = temp;
                }
            }
        }

    }

}


const d = new Deck();
d.createDeck();
console.log(d.cards);
console.log("shuffleing");
d.shuffleDeck();
console.log(d.cards);
console.log("sorting");
d.sortDeck(d.cards);
console.log(d.cards);

