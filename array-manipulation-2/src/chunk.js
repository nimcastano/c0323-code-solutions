/* exported chunk */
const chunk = (arr, size) => {
  const newArr = [];
  let subArr = [];
  // in case size wanted is greater than length of arr
  if (size > arr.length) {
    return arr;
  } else {
    for (let i = 0; i < arr.length; i++) {
      // push every el to subArr
      subArr.push(arr[i]);
      // if subArr is length of size or if on last index of arr
      if (subArr.length === size || i === arr.length - 1) {
        // push subArr to newArr and reset subArr to empty
        newArr.push(subArr);
        subArr = [];
      }
    }
  }
  return newArr;
};
