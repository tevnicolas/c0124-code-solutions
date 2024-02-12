'use strict';
/* exported toObject */
const toObject = (keyValuePair) => {
  const newObject = {};
  const key = String(keyValuePair[0]);
  newObject[key] = keyValuePair[1];
  return newObject;
};
