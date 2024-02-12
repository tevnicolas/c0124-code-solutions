/* exported getKeys */

const getKeys = (object: Record<string, unknown>): string[] => {
  const newArray: string[] = [];
  for (const key in object) newArray.push(key);
  return newArray;
};
