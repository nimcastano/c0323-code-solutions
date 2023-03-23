/* exported oddOrEven */
const oddOrEven = numbers => {
  const newArr = [];
  for (const el of numbers) {
    if (el % 2 === 0) {
      newArr.push('even');
    } else {
      newArr.push('odd');
    }
  }
  return newArr;
};
