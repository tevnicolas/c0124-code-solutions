/* exported drop */

const drop = (array: unknown[], count: number): unknown[] => {
  const newArray = [];
  for (let i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};
