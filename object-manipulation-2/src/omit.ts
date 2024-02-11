/* exported omit */

function omit(
  source: Record<string, unknown>,
  keys: unknown[]
): Record<string, unknown> {
  const newObject: Record<string, unknown> = {};
  for (const prop in source) {
    newObject[prop] = source[prop];
    for (let i = 0; i < keys.length; i++) {
      if (prop === keys[i]) {
        delete newObject[prop];
      }
    }
  }
  return newObject;
}
