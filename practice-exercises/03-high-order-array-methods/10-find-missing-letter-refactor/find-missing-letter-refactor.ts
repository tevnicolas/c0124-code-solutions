export function findMissingLetter(arr: string[]): string {
  const charCodes = arr.map((c) => c.charCodeAt(0));
  const targetBefore = charCodes.find(
    (cc, i) => cc + 1 !== charCodes[i + 1]
  ) as number;
  return String.fromCharCode(targetBefore + 1);
}
