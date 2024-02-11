/* exported defaults */

const defaults = (
  target: Record<string, unknown>,
  source: Record<string, unknown>
): void => {
  for (const prop in source) {
    if (prop in target === false) {
      target[prop] = source[prop];
    }
  }
};
