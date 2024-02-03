'use strict';
/* exported takeRight */
const takeRight = (array, count) => {
  const newArray = [];
  if (array.length && count <= array.length) {
    for (let i = array.length - count; i < array.length; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  } else {
    return array;
  }
};
