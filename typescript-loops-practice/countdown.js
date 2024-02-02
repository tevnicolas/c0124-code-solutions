'use strict';
/* exported countdown */
const countdown = (number) => {
  const newArray = [];
  for (let i = number; i >= 0; i--) newArray.push(i);
  return newArray;
};
