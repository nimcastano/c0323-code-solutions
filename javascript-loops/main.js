/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

const getNumbersToTen = () => {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
};

const getEvenNumbersToTwenty = () => {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
};

const repeatWord = (word, times) => {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
};

const logEachCharacter = (str) => {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
};

const doubleAll = (numbers) => {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
};

const getKeys = (obj) => {
  const keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
};

const getValues = (obj) => {
  const values = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
};
