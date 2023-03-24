/* exported filterOutStrings */
const filterOutStrings = values => {
  const newArr = [];
  for (const el of values) {
    if (typeof el !== 'string') {
      newArr.push(el);
    }
  }
  return newArr;
};
