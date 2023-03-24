/* exported findIndex */
const findIndex = (arr, value) => {
  // need to keep track of index so we use regular for loop
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  // return -1 only if none of the elements in arr match the value argument
  return -1;
};
