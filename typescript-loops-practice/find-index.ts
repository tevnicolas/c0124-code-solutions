/* exported findIndex */

const findIndex = (array: unknown[], value: number): number => {
  let x = -1;
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      x = i;
      break;
    }
  }
  return x;
};
