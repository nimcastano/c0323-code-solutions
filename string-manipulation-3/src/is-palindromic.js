/* exported isPalindromic */
const isPalindromic = str => {
  let otherSide = str.length - 1;
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] === ' ') {
      i++;
    } else if (str[otherSide] === ' ') {
      otherSide--;
    }
    if (str[i] !== str[otherSide]) {
      return false;
    }
    otherSide--;
  }
  return true;
};
