/* exported capitalizeWord */
const capitalizeWord = word => {
  let str = word[0].toUpperCase();
  word = word.toLowerCase();
  if (word === 'javascript') {
    return 'JavaScript';
  }
  for (let i = 1; i < word.length; i++) {
    str += word[i];
  }
  return str;
};
