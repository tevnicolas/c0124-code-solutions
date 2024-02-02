'use strict';
/* exported findIndex */
const findIndex = (array, value) => {
  let x = -1;
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      x = i;
      break;
    }
  }
  return x;
};
