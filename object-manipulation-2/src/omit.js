'use strict';
/* exported omit */
function omit(source, keys) {
  const newObject = {};
  for (let prop in source) {
    newObject[prop] = source[prop];
    for (let i = 0; i < keys.length; i++) {
      if (prop === keys[i]) {
        delete newObject[prop];
      }
    }
  }
  return newObject;
}
