/* exported invert */

const invert = (source: Record<string, unknown>): Record<string, unknown> => {
  const newObject: Record<string, unknown> = {};
  for (const key in source) {
    newObject[String(source[key])] = key;
  }
  return newObject;
};
