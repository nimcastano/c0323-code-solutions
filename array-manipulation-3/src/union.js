/* exported union */
const union = (arr1, arr2) => {
  const newArr = [];
  for (const el of arr1) {
    if (!newArr.includes(el)) {
      newArr.push(el);
    }
  }
  for (const el of arr2) {
    if (!newArr.includes(el)) {
      newArr.push(el);
    }
  }
  return newArr;
};
