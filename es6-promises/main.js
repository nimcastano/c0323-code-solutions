import takeAChance from './take-a-chance.js';

takeAChance('Nimmy')
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });
