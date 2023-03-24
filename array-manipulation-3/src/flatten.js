/* exported flatten */
const flatten = arr => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // check if el in arr is a nested array
    if (arr[i][0]) {
      for (let j = 0; j < arr[i].length; j++) {
        newArr.push(arr[i][j]);
      }
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
