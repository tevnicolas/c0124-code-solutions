'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
const fiveSeconds = convertMinutesToSeconds(5);
console.log('convertMinutesToSeconds Result: ', fiveSeconds);
function greet(name) {
  return 'Hey ' + name + '!';
}
const heyTev = greet('Tev');
console.log('greet Result: ', heyTev);
const getArea = (width, height) => width * height;
console.log('getArea Result: ', getArea(5, 5));
const getFirstName = (person) => person.firstName;
const tevNicolas = getFirstName({ firstName: 'Tev', lastName: 'Nicolas' });
console.log('getFirstName Result: ', tevNicolas);
const getLastElement = (array) => array[array.length - 1];
const newArrayGetLast = getLastElement([5, 'ten', 'fifteen', 20]);
console.log('getLastElement Result: ', newArrayGetLast);
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
const twoLevelsOfFunctions = callOtherFunction(getLastElement, [3, 6, 8]);
console.log('callOtherFunctions Result: ', twoLevelsOfFunctions);
