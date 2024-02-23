export function findMissingLetter(arr: string[]): string | undefined {
  const newArr = arr.sort();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  if (newArr[0] === newArr[0].toLowerCase() && newArr.length !== 0) {
    alphabet = alphabet.toLowerCase();
  } else if (newArr[0] === newArr[0].toUpperCase() && newArr.length !== 0) {
    alphabet = alphabet.toUpperCase();
  } else {
    return '';
  }

  for (let i = 0; i < newArr.length; i++) {
    const indexPos = alphabet.indexOf(newArr[i]);
    const nextIndexPos = alphabet.indexOf(newArr[i + 1]);

    if (indexPos + 1 !== nextIndexPos && nextIndexPos !== -1) {
      return alphabet[indexPos + 1];
    }
  }
  return undefined;
}
