// Math Object

const num1 = 24;
const num2 = 52;
const num3 = 80;
const maximumValue = Math.max(num1, num2, num3);
console.log('maximumValue: ', maximumValue);

const heroes = ['Kobe', 'Franklin Richards', 'Iceman', 'Storm'];
let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex: ', randomIndex);
const randomHero = heroes[randomIndex];
console.log('randomHero: ', randomHero);

// Array Methods

const library = [
  {
    title: 'Naruto',
    author: 'Musashi Kishimoto'
  },
  {
    title: 'Think and Grow Rich',
    author: 'Napoleon Hill'
  },
  {
    title: 'Bleach',
    author: 'Tite Kubo'
  }
];

const lastBook = library.pop();
console.log('lastBook: ', lastBook);
const firstBook = library.shift();
console.log('firstBook: ', firstBook);

const js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library: ', library);

// String Methods

const fullName = 'Nimrod Castano';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName);
