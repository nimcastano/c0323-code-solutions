const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const sale = prices.map((el) => {
  const obj = {
    price: el,
    salePrice: el / 2,
  };
  return obj;
});
console.log('price objects: ', sale);

const formatted = prices.map((el) => {
  return `$${el.toFixed(2)}`;
});
console.log('formatted prices: ', formatted);
