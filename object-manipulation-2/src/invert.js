/* exported invert */
const invert = (source) => {
  const newObj = {};
  for (const el in source) {
    newObj[source[el]] = el;
  }
  return newObj;
};
