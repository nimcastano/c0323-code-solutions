/* exported unique */
const unique = arr => {
  const newArr = [];
  for (const el of arr) {
    if (!newArr.includes(el)) {
      newArr.push(el);
    }
  }
  return newArr;
};
