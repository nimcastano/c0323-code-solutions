/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

const isUnderFive = (num) => {
  return (num < 5);
};

const isEven = (num) => {
  return (num % 2 === 0);
};

const startsWithJ = (str) => {
  return (str[0] === 'J');
};

const isOldEnoughToDrink = (person) => {
  return (person.age >= 21);
};

const isOldEnoughToDrive = (person) => {
  return (person.age >= 16);
};

const isOldEnoughToDrinkAndDrive = (person) => {
  return false;
};

const categorizeAcidity = (pH) => {
  if (pH === 7) {
    return 'neutral';
  } else if (pH < 7 && pH >= 0) {
    return 'acid';
  } else if (pH <= 14 && pH > 7) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
};

const introduceWarnerBro = (name) => {
  switch (name) {
    case 'yakko':
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight Everybody!';
  }
};

const recommendMovie = (genre) => {
  switch (genre) {
    case 'action':
      return 'Puss in Boots';

    case 'comedy':
      return 'Rush Hour';

    case 'horror':
      return 'The Ring';

    case 'drama':
      return 'Lion';

    case 'musical':
      return 'La La Land';

    case 'sci-fi':
      return 'Wall-E';

    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
};
