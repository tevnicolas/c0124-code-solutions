const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const newNumbers1 = numbers.map((num) => {
  return num * 2;
});
/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */
const newNumbers2 = numbers.filter((num) => {
  return num % 2 === 0;
});
/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */

const newNumbers3 = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */

numbers.forEach((num) => {
  console.log(num);
});

/**
 * find: Returns the first array element that satisfies a specified condition.
 */
const valueFourElement = numbers.find((arrayValue) => {
  return arrayValue === 4;
});

/**
 * some: Checks if at least one array element satisfies a condition.
 */

/**
 * every: Checks if all array elements satisfy a condition.
 */
