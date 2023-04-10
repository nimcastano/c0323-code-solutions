/* exported dropRight */
const dropRight = (arr, count) => {
  const newArr = [];
  if (count > arr.length) {
    return arr;
  } else {
    for (let i = 0; i < arr.length - count; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
};
