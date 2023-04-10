/* exported take */
const take = (arr, count) => {
  if (count > arr.length) {
    return arr;
  } else {
    const newArr = [];
    for (let i = 0; i < count; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
};
