export function generateHashtag(str: string): string | undefined {
  if (!str) return undefined;
  const strArr = str.split(' ').filter((value) => value !== ' ' && value);
  const mappedArr = strArr.map((word) => {
    if (word.length > 1) {
      return word[0].toUpperCase() + word.slice(1);
    } else {
      return word[0].toUpperCase();
    }
  });
  const newString = '#' + mappedArr.join('');
  return newString.length <= 140 ? newString : undefined;
}
