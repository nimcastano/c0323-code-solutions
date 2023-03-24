/* exported reverseWords */
const reverseWords = (str) => {
  let newStr = '';
  let subStr = '';
  const words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    for (let j = words[i].length - 1; j >= 0; j--) {
      subStr += words[i][j];
    }
    if (words[i + 1]) {
      newStr += subStr + ' ';
    } else {
      newStr += subStr;
    }
    subStr = '';
  }
  return newStr;
};
