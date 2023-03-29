/* exported capitalize */
const capitalize = word => {
  let str = word[0].toUpperCase();
  word = word.toLowerCase();
  if (word.length > 1) {
    for (let i = 1; i < word.length; i++) {
      str += word[i].toLowerCase();
    }
  }
  return str;
};
