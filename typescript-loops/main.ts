/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

const getNumbersToTen = (): number[] => {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber < 11) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
};

function getEvenNumbersToTwenty(): number[] {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber < 21) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

const repeatWord = (word: string, times: number): string => {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    count++;
    repeated += word;
  }
  return repeated;
};

const logEachCharacter = (string: string): void => {
  for (let i = 0; i < string.length; i++) console.log(string[i]);
};

const doubleAll = (numbers: number[]): number[] => {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) doubled.push(numbers[i] * 2);
  return doubled;
};

const getKeys = (object: Record<string, unknown>): unknown[] => {
  const keys = [];
  for (const key in object) keys.push(key);
  return keys;
};

const getValues = (object: Record<string, unknown>): unknown[] => {
  const values = [];
  for (const key in object) values.push(object[key]);
  return values;
};
