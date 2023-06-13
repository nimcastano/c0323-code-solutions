import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers(numbers)', () => {
  it('returns a new array that contains only the even numbers', () => {
    const result1 = evenNumbers([0, 2, 3, 7, 12, 14]);
    expect(result1).toEqual([0, 2, 12, 14]);
    const result2 = evenNumbers([]);
    expect(result2).toEqual([]);
    const result3 = evenNumbers([-8, -3]);
    expect(result3).toEqual([-8]);
  });
});

describe('toDollars(amount)', () => {
  it('returns a number formatted in dollars and cents', () => {
    const result1 = toDollars(24.5918);
    expect(result1).toEqual('$24.59');
    const result2 = toDollars(0);
    expect(result2).toEqual('$0.00');
    const result3 = toDollars(5.6e3);
    expect(result3).toEqual('$5600.00');
  });
});

describe('divideBy(numbers, divisor)', () => {
  it(`returns a new array of numbers where every entry has been divided by the
  given divisor. Does not modify the original array.`, () => {
    const arr1 = [24, 8, 120, -44, 0];
    const result1 = divideBy(arr1, 4);
    expect(result1).toEqual([6, 2, 30, -11, 0]);
    expect(arr1).toEqual([24, 8, 120, -44, 0]);
    const arr2 = [];
    const result2 = divideBy(arr2, 7);
    expect(result2).toEqual([]);
    expect(arr2).toEqual([]);
  });
});

describe('multiplyBy(obj, multiplier', () => {
  it(`Modifies an object by multiplying the value of each key, but only if that
  value is a number`, () => {
    const obj1 = {
      bro: 3,
      28: 'sis',
      name: false,
      dad: {},
      mom: -8,
    };
    const result1 = multiplyBy(obj1, 4);
    expect(result1).toEqual({
      bro: 12,
      28: 'sis',
      name: false,
      dad: {},
      mom: -32,
    });
    expect(result1).toEqual(obj1);
    const obj2 = [2, 5, 'holla'];
    const result2 = multiplyBy(obj2, 3);
    expect(result2).toEqual([6, 15, 'holla']);
    expect(result2).toEqual(obj2);
    const obj3 = {};
    const result3 = multiplyBy(obj3, 3);
    expect(result3).toEqual({});
    expect(result3).toEqual(obj3);
  });
});
