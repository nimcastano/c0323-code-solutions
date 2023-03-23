/* exported initial */
const initial = arr => {
  const newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};
