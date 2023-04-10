/* exported drop */
const drop = (arr, count) => {
  const newArr = [];
  if (count > arr.length) {
    return arr;
  } else {
    for (let i = count; i < arr.length; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
};
