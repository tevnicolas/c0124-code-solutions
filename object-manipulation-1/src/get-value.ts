/* exported getValue */

const getValue = (object: Record<string, unknown>, key: string): unknown => {
  return object[key];
};
