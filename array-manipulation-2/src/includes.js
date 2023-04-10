/* exported includes */
const includes = (arr, val) => {
  for (const el of arr) {
    if (el === val) {
      return true;
    }
  }
  return false;
};
