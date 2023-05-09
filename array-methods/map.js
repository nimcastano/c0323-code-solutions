const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const sale = prices.map((el) => ({ prices: el, salePrice: el / 2 }));
console.log('price objects: ', sale);

const formatted = prices.map((el) => `$${el.toFixed(2)}`);
console.log('formatted prices: ', formatted);
