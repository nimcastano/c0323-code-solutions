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

const game = (players, numOfCards) => {

  // create a deck
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

  // shuffle the deck
  const shuffle = (deck) => {
    const shuffledDeck = [];
    while (deck.length) {
      const index = Math.ceil(Math.random() * (deck.length - 1));
      shuffledDeck.push(deck[index]);
      deck.splice(index, 1);
    }
    return shuffledDeck;
  };

  const shuffledDeck = shuffle(cards);

  // deal the cards
  let count = 0;
  for (let i = 0; i < (players.length * 2); i++) {
    players[count % players.length].hand.push(shuffledDeck[0]);
    shuffledDeck.splice(0, 1);
    count++;
  }

  // add score property to each player
  const score = (player, numOfCards) => {
    let sum = 0;
    for (let i = 0; i < numOfCards; i++) {
      const card = player.hand[i].rank;
      if (card === 'ace') {
        sum += 11;
      } else if (typeof card === 'string') {
        sum += 10;
      } else {
        sum += card;
      }
    }
    return sum;
  };

  player1.score = score(player1, 2);
  player2.score = score(player2, 2);
  player3.score = score(player3, 2);
  player4.score = score(player4, 2);

  // determine the winner
  const winner = (arrOfPlayers) => {
    let max = 0;
    let goat;
    for (let i = 0; i < arrOfPlayers.length; i++) {
      if (arrOfPlayers[i].score > max) {
        max = arrOfPlayers[i].score;
        goat = arrOfPlayers[i].name;
      }
    }
    return goat;
  };

  return winner(players);
};

console.log(game(players, 2));
