'use strict';
/* exported pick */
function pick(source, keys) {
  const newObject = {};
  for (let prop in source) {
    for (let i = 0; i < keys.length; i++) {
      if (prop === keys[i] && source[prop] !== undefined) {
        newObject[prop] = source[prop];
      }
    }
  }
  return newObject;
}
