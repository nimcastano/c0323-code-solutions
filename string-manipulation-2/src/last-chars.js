/* exported lastChars */
const lastChars = (length, str) => {
  let result = '';
  if (length > str.length) {
    return str;
  } else {
    for (let i = (str.length - length); i < str.length; i++) {
      result += str[i];
    }
    return result;
  }
};
