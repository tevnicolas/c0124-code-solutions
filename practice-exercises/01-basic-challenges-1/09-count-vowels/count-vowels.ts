export function countVowels(str: string): number {
  const newStr = str.replaceAll(' ', '').replaceAll(',', '').toLowerCase();
  let count = 0;
  for (let i = 0; i < newStr.length; i++) {
    switch (newStr[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        count++;
    }
  }
  return count;
}
