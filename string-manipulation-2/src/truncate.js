/* exported truncate */
const truncate = (length, str) => {
  let newStr = '';
  for (let i = 0; i < length; i++) {
    if (str[i]) {
      newStr += str[i];
    } else {
      break;
    }
  }
  newStr += '...';
  return newStr;
};
