'use strict';
/* exported defaults */
const defaults = (target, source) => {
  for (let prop in source) {
    if (prop in target === false) {
      target[prop] = source[prop];
    }
  }
};
