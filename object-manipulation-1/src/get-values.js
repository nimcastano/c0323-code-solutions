/* exported getValues */
const getValues = obj => {
  const arr = [];
  for (const el in obj) {
    arr.push(obj[el]);
  }
  return arr;
};
