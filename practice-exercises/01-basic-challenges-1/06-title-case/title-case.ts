export function titleCase(str: string): string {
  const words = str.split(' ');
  let finalPhrase = '';
  for (let i = 0; i < words.length; i++) {
    finalPhrase +=
      words[i][0].toUpperCase() + words[i].slice(1, words[i].length);
    if (i + 1 === words.length) break;
    finalPhrase += ' ';
  }
  return finalPhrase;
}
