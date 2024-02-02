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

function isUnderFive(number: number): boolean {
  return number < 5;
}

const isEven = (number: number): boolean => number % 2 === 0;

const startsWithJ = (string: string): boolean => string.charAt(0) === 'J';

interface Person {
  name: string;
  age: number;
}

const isOldEnoughToDrink = (person: Person): boolean => person.age >= 21;

function isOldEnoughToDrive(person: Person): boolean {
  return person.age > 15;
}

const isOldEnoughToDrinkAndDrive = (person: Person): boolean => {
  if (person) {
    return false;
  } else {
    return false;
  }
};

function categorizeAcidity(pH: number): string {
  return pH > 0 && pH < 7
    ? 'acid'
    : pH === 7
    ? 'neutral'
    : pH > 7 && pH < 14
    ? 'base'
    : 'invalid pH level';
}

const introduceWarnerBro = (name: string): string => {
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

const recommendMovie = (genre: string): string => {
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
