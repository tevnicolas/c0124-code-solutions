export function findFirstNonRepeatingCharacter(
  str: string
): string | undefined {
  for (let i = 0; i < str.length; i++) {
    const compareStr = str.split(str[i]).join('');
    if (str.length - compareStr.length < 2) {
      return str[i];
    }
  }

  return undefined;
}
