/* exported swapChars */
const swapChars = (firstIndex, secondIndex, str) => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (i === firstIndex) {
      result += str[secondIndex];
    } else if (i === secondIndex) {
      result += str[firstIndex];
    } else {
      result += str[i];
    }
  }
  return result;
};
