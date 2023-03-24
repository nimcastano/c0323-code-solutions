/* exported firstChars */
const firstChars = (length, str) => {
  let result = '';
  if (length > str.length) {
    return str;
  } else {
    for (let i = 0; i < length; i++) {
      result += str[i];
    }
    return result;
  }
};
