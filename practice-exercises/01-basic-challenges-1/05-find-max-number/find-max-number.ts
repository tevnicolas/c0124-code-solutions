export function findMaxNumber(arr: number[]): number {
  let currentNumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > currentNumber) {
      currentNumber = arr[i];
    }
  }
  return currentNumber;
}
