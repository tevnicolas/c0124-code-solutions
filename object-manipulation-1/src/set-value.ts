/* exported setValue */

const setValue = (
  object: Record<string, unknown>,
  key: string,
  value: unknown
): void => {
  object[key] = value;
};
