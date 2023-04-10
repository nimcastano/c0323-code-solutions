/* exported numVowels */
const numVowels = (str) => {
  let count = 0;
  str = str.toLowerCase();
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  };
  for (const el of str) {
    if (vowels[el]) {
      count++;
    }
  }
  return count;
};
