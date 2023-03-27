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
  const words = title.toLowerCase().split(' ');
  console.log(words);
  const cappedWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase().includes('javascript')) {
      let js = 'JavaScript';
      if (words[i].length > js.length) {
        js += words[i][words[i].length - 1];
      }
      cappedWords.push(js);
    } else if (words[i].toLowerCase() === 'api') {
      cappedWords.push('API');
    } else if (words[i].length <= 3 && i !== 0 && conjun[words[i]]) {
      cappedWords.push(words[i].toLowerCase());
    } else {
      let str = '';
      str += words[i][0].toUpperCase();
      for (let j = 1; j < words[i].length; j++) {
        str += words[i][j];
      }
      cappedWords.push(str);
    }
    if (words[i].includes(':')) {
      const str = words[i + 1];
      let cappedStr = str[0].toUpperCase();
      for (let j = 1; j < str.length; j++) {
        cappedStr += str[j];
      }
      console.log(cappedStr);
      cappedWords.push(cappedStr);
      i++;
    }
  }
  return cappedWords.join(' ');
};
