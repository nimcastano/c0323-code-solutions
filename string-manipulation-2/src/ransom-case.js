/* exported ransomCase */
const ransomCase = str => {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || (i % 2) === 0) {
      newStr += str[i].toLowerCase();
    } else {
      newStr += str[i].toUpperCase();
    }
  }
  return newStr;
};
