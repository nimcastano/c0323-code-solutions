/* exported pick */
const pick = (source, keys) => {
  const newObj = {};
  for (const el in source) {
    if (keys.includes(el) && source[el] !== undefined) {
      newObj[el] = source[el];
    }
  }
  return newObj;
};
