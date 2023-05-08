/* exported difference */
const difference = (arr1, arr2) => {
  const newArr = [];
  for (const el of arr1) {
    if (!arr2.includes(el)) {
      newArr.push(el);
    }
  }
  for (const el of arr2) {
    if (!arr1.includes(el)) {
      newArr.push(el);
    }
  }
  return newArr;
};
