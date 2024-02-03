/* exported take */

const take = (array: unknown[], count: number): unknown[] => {
  const newArray = [];
  if (array.length) {
    for (let i = 0; i < count; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  } else {
    return array;
  }
};
