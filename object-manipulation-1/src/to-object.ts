/* exported toObject */

const toObject = (keyValuePair: unknown[]): Record<string, unknown> => {
  const newObject = {};
  const key = String(keyValuePair[0]);
  newObject[key] = keyValuePair[1];
  return newObject;
};
