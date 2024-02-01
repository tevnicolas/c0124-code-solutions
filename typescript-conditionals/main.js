'use strict';
/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  return number < 5;
}
const isEven = (number) => number % 2 === 0;
const startsWithJ = (string) => string.charAt(0) === 'J';
const isOldEnoughToDrink = (person) => person.age >= 21;
function isOldEnoughToDrive(person) {
  return person.age > 15;
}
const isOldEnoughToDrinkAndDrive = (person) => false;
function categorizeAcidity(pH) {
  return pH > 0 && pH < 7
    ? 'acid'
    : pH === 7
    ? 'neutral'
    : pH > 7 && pH < 14
    ? 'base'
    : 'invalid pH level';
}
const introduceWarnerBro = (name) => {
  switch (name) {
    case 'yakko':
      return `We're the warner brothers`;
    case 'wakko':
      return `We're the warner brothers`;
    case 'dot':
      return `I'm cute~`;
    default:
      return `Goodnight everybody!`;
  }
};
const recommendMovie = (genre) => {
  switch (genre) {
    case 'action':
      return 'Die Hard';
    case 'comedy':
      return 'The Big Lebowski';
    case 'horror':
      return 'The Nun';
    case 'drama':
      return 'The Holdovers';
    case 'musical':
      return 'The Sound of Music';
    case 'sci-fi':
      return 'Strange Days';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
};
