'use strict';
/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  let newString = '';
  newString += string.slice(0, firstIndex);
  newString += string[secondIndex];
  newString += string.slice(firstIndex + 1, secondIndex);
  newString += string[firstIndex];
  newString += string.slice(secondIndex + 1);
  return newString;
}
