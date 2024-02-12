'use strict';
/* exported chunk */
const chunk = (array, size) => {
  const newArray = [];
  for (let i = 0; i < array.length - size + 1; i += size) {
    const subArray = [];
    for (let y = i; y < i + size && y < array.length; y++) {
      subArray.push(array[y]);
    }
    newArray.push(subArray);
  }
  const remainder = array.length % size;
  const remainderArray = [];
  if (remainder) {
    for (let i = array.length - remainder; i < array.length; i++) {
      remainderArray.push(array[i]);
    }
    newArray.push(remainderArray);
  }
  return newArray;
};
