/* exported sumAll */
const sumAll = (arrOfNums) => {
  let sum = 0;
  for (const el of arrOfNums) {
    sum += el;
  }
  return sum;
};
