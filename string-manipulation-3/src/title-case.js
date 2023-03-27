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
      let api = 'API';
      if (words[i].length > api.length) {
        api += words[i][words[i].length - 1];
      }
      cappedWords.push(api);
    } else if (words[i].length <= 3 && i !== 0 && conjun[words[i]]) {
      cappedWords.push(words[i].toLowerCase());
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
    } else {
      let str = '';
      str += words[i][0].toUpperCase();
      for (let j = 1; j < words[i].length; j++) {
        str += words[i][j];
      }
      cappedWords.push(str);
    }
    if (words[i].includes(':')) {
      const notStr = words[i + 1];
      let str = notStr[0].toUpperCase();
      for (let j = 1; j < notStr.length; j++) {
        str += notStr[j];
      }
      i++;
      cappedWords.push(str);
    }
  }
  return cappedWords.join(' ');
};
