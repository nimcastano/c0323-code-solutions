/* exported omit */
const omit = (source, keys) => {
  const newObj = {};
  for (const el in source) {
    if (!keys.includes(el)) {
      newObj[el] = source[el];
    }
  }
  return newObj;
};
