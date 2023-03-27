/* exported titleCase */
const titleCase = title => {
  const conjun = {
    and: true,
    the: true,
    but: true,
    for: true,
    in: true,
    or: true,
    a: true,
    an: true,
    by: true,
    of: true,
    on: true,
    to: true
  };
  // split words up
  const words = title.toLowerCase().split(' ');
  // setup resulting array of words
  const cappedWords = [];
  for (let i = 0; i < words.length; i++) {
    // to fix javascript string
    if (words[i].toLowerCase().includes('javascript')) {
      let str = 'JavaScript';
      if (words[i].length > str.length) {
        str += words[i][words[i].length - 1];
      }
      cappedWords.push(str);
      // to fix api string
    } else if (words[i].toLowerCase().includes('api')) {
      let str = 'API';
      if (words[i].length > str.length) {
        str += words[i][words[i].length - 1];
      }
      cappedWords.push(str);
      // to fix conjunction words
    } else if (words[i].length <= 3 && i !== 0 && conjun[words[i]]) {
      const str = words[i].toLowerCase();
      cappedWords.push(str);
      // to fix hyphenated words
    } else if (words[i].includes('-')) {
      const hyphen = words[i].indexOf('-');
      let str = '';
      str += words[i][0].toUpperCase();
      for (let j = 1; j < hyphen + 1; j++) {
        str += words[i][j];
      }
      str += words[i][hyphen + 1].toUpperCase();
      for (let j = hyphen + 2; j < words[i].length; j++) {
        str += words[i][j];
      }
      cappedWords.push(str);
      // to fix any other word
    } else {
      let str = '';
      str += words[i][0].toUpperCase();
      for (let j = 1; j < words[i].length; j++) {
        str += words[i][j];
      }
      cappedWords.push(str);
    }
    // to fix words after a word with a colon
    if (words[i].includes(':')) {
      const notStr = words[i + 1];
      let str = notStr[0].toUpperCase();
      for (let j = 1; j < notStr.length; j++) {
        str += notStr[j];
      }
      // so the word after the colon doesnt go through the loop since we just fixed it
      i++;
      cappedWords.push(str);
    }
  }
  // join the array of strings so it results into one big string
  return cappedWords.join(' ');
};
