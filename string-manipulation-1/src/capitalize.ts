/* exported capitalize */

const capitalize = (word: string): string => {
  const firstLetter = word.charAt(0).toUpperCase();
  const theRest = word.slice(1).toLowerCase();
  return firstLetter + theRest;
};
