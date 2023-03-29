/* exported compact */
const compact = arr => {
  const newArr = [];
  for (const el of arr) {
    if (el) {
      newArr.push(el);
    }
  }
  return newArr;
};
