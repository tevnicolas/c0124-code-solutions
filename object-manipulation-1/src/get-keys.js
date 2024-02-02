'use strict';
/* exported getKeys */
const getKeys = (object) => {
  const newArray = [];
  for (let key in object) newArray.push(key);
  return newArray;
};
