/* exported toObject */
const toObject = arr => {
  const obj = {};
  obj[arr[0]] = arr[1];
  return obj;
};
