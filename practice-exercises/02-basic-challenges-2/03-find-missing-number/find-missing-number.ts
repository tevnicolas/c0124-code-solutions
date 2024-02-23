export function findMissingNumber(arr: number[]): number | undefined {
  if (!arr) {
    return undefined;
  }
  if (arr.length === 0) {
    return 1;
  }
  const newArray = arr.sort((a, b) => {
    return a - b;
  });
  const num = arr.reduce((acc: number, curr: number, index: number): number => {
    if (newArray[index + 1] - curr !== 1 && index + 1 !== newArray.length) {
      return acc + curr;
    } else {
      return acc;
    }
  }, 1);
  return num;
}
