export function isPalindrome(str: string): boolean {
  let newStr = str.replaceAll(' ', '').replaceAll(',', '');
  newStr = newStr.toLowerCase();
  let backwards = '';
  for (let i = newStr.length - 1; i >= 0; i--) {
    backwards += newStr[i];
  }
  if (backwards === newStr) {
    return true;
  } else {
    return false;
  }
}
