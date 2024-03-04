import { add } from '../../05-complexity/07-space-complexity/space-complexity';

export function sumOfEvenSquares(numbers: number[]): number {
  const filteredForEven = numbers.filter((value) => {
    return value % 2 === 0;
  });

  const squareEvens = filteredForEven.map((value) => {
    return value ** 2;
  });

  const addEmUp = squareEvens.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return addEmUp;
}
