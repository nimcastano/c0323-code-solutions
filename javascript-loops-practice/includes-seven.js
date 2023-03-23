/* exported includesSeven */
const includesSeven = (arr) => {
  // iterate through arr
  for (const el of arr) {
    // check if el of arr is 7
    if (el === 7) {
      // return true and exit the func if true
      return true;
    }
  }
  // return false after loop so we can check all the elements in arr
  return false;
};
