'use strict';
/* exported invert */
const invert = (source) => {
  const newObject = {};
  for (let key in source) {
    newObject[String(source[key])] = key;
  }
  return newObject;
};
