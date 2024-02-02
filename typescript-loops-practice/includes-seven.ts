/* exported includesSeven */

const includesSeven = (array: unknown[]): boolean => {
  let bool = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      bool = true;
    }
  }
  return bool;
};
