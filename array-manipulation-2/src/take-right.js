/* exported takeRight */
const takeRight = (arr, count) => {
  const newArr = [];
  if (count > arr.length) {
    return arr;
  } else {
    for (let i = (arr.length - count); i < arr.length; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
};
