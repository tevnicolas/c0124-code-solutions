export function areAllCharactersUnique(str: string): boolean {
  for (let i = 0; i < str.length; i++) {
    const compareStr = str.split(str[i]).join('');
    if (str.length - compareStr.length > 1) {
      return false;
    }
  }
  return true;
}
