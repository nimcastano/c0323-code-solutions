/* exported filterOutNulls */
const filterOutNulls = values => {
  const newArr = [];
  for (const el of values) {
    if (el !== null) {
      newArr.push(el);
    }
  }
  return newArr;
};
