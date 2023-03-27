console.log('Lodash is loaded:', typeof _ !== 'undefined');
const player1 = {
  name: 'Leo',
  hand: []
};
const player2 = {
  name: 'Mikey',
  hand: []
};
const player3 = {
  name: 'Donnie',
  hand: []
};
const player4 = {
  name: 'Raf',
  hand: []
};

const players = [player1, player2, player3, player4];
const cards = [];
const cardVals = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
const cardSuits = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];

let cardNum = 0;
for (let i = 0; i < cardVals.length; i++) {
  for (let j = 0; j < cardSuits.length; j++) {
    cards[cardNum] = {
      rank: cardVals[i],
      suit: cardSuits[j]
    };
    cardNum++;
  }
}

let count = 0;
for (let i = 0; i < (players.length * 2); i++) {
  const cardIndex = Math.ceil(Math.random() * (cards.length - 1));
  players[count % players.length].hand.push(cards[cardIndex]);
  cards.splice(cardIndex, 1);
  count++;
}
