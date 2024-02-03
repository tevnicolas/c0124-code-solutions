/* exported lastChars */

function lastChars(length: number, string: string): string {
  if (string.length >= length) {
    return string.slice(string.length - length);
  } else {
    return string;
  }
}
