/* exported getWords */

const getWords = (string: string): string[] => {
  const newArray = string.split(' ').filter((word) => word !== '');
  return newArray;
};
