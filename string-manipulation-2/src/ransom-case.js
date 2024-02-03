'use strict';
/* exported ransomCase */
function ransomCase(string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2) {
      newString += string.charAt(i).toUpperCase();
    } else {
      newString += string.charAt(i).toLowerCase();
    }
  }
  return newString;
}
