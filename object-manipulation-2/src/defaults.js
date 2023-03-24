/* exported defaults */
const defaults = (target, source) => {
  const targetKeys = Object.keys(target);
  for (const el in source) {
    if (!targetKeys.includes(el)) {
      target[el] = source[el];
    }
  }
  return target;
};
