export function reverseString(str: string): string {
  if (str.length <= 0) {
    return '';
  }

  return str[str.length - 1] + reverseString(str.substring(0, str.length - 1));
}
