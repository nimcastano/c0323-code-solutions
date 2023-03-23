/* exported countdown */
const countdown = (num) => {
  const arr = [];
  for (let i = num; i >= 0; i--) {
    arr.push(i);
  }
  return arr;
};
