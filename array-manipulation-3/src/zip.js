/* exported zip */
const zip = (arr1, arr2) => {
  const newArr = [];
  // let subArr = [];
  const min = Math.min(arr1.length, arr2.length);
  for (let i = 0; i < min; i++) {
    newArr.push([arr1[i], arr2[i]]);
    // subArr = [];
  }
  return newArr;
};
