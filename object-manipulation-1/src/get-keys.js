/* exported getKeys */
const getKeys = obj => {
  const arr = [];
  for (const el in obj) {
    arr.push(el);
  }
  return arr;
};
