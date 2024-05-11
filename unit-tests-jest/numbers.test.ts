import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
  it('edge cases', () => {
    const numbers: number[] = [];
    const result = evenNumbers(numbers);
    expect(result).toEqual([]);
  });
});

describe('toDollars', () => {
  it('returns number to proper format', () => {
    let number = 55;
    let result = toDollars(number);
    expect(result).toBe('$55.00');
    number = 55.01;
    result = toDollars(number);
    expect(result).toBe('$55.01');
    number = 55.1;
    result = toDollars(number);
    expect(result).toBe('$55.10');
  });
  it('edge cases', () => {
    let number = 0;
    let result = toDollars(number);
    expect(result).toBe('$0.00');
    number = 1.00000001034;
    result = toDollars(number);
    expect(result).toBe('$1.00');
    number = -10.0;
    result = toDollars(number);
    expect(result).toBe('-$10.00');
  });
});

describe('divideBy', () => {
  it('returns array divided by divisor', () => {
    const divisor = 2;
    const array = [2, 4, 5, 6];
    const result = divideBy(array, divisor);
    expect(result).toEqual([1, 2, 2.5, 3]);
  });
  it('edge cases', () => {
    const divisor = 0;
    const array: number[] = [];
    const result = divideBy(array, divisor);
    expect(result).toEqual([]);
  });
});

describe('multiplyBy', () => {
  it('returns object with number values multiplied by multiplier', () => {
    const multiplier = 2;
    const obj = { hello: 'hello', goodbye: 9 };
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ hello: 'hello', goodbye: 18 });
  });
  it('edge cases', () => {
    const multiplier = 0;
    const obj = {};
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({});
  });
});
