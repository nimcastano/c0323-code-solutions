/* exported addSuffixToAll */
const addSuffixToAll = (words, suffix) => {
  for (let i = 0; i < words.length; i++) {
    words[i] += suffix;
  }
  return words;
};
