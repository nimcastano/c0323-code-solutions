/* exported calculator */
const calculator = {
  add(x, y) {
    return x + y;
  },
  subtract(x, y) {
    return x - y;
  },
  multiply(x, y) {
    return x * y;
  },
  divide(x, y) {
    return x / y;
  },
  square(x) {
    return x * x;
  },
  sumAll(numbers) {
    let sum = 0;
    for (const el of numbers) {
      sum += el;
    }
    return sum;
  },
  getAverage(numbers) {
    return this.sumAll(numbers) / numbers.length;
  }
};
