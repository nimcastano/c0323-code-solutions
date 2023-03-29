/* exported isVowel */
const isVowel = char => {
  char = char.toLowerCase();
  switch (char) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
  }
  return false;
};
