'use strict';
/* exported getWords */
const getWords = (string) => {
  const newArray = string.split(' ').filter((word) => word !== '');
  return newArray;
};
