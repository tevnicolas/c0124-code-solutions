/* exported pick */

function pick(
  source: Record<string, unknown>,
  keys: unknown[]
): Record<string, unknown> {
  const newObject: Record<string, unknown> = {};
  for (const prop in source) {
    for (let i = 0; i < keys.length; i++) {
      if (prop === keys[i] && source[prop] !== undefined) {
        newObject[prop] = source[prop];
      }
    }
  }
  return newObject;
}
