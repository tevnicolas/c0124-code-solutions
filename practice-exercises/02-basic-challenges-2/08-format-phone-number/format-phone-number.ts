export function formatPhoneNumber(numbers: number[]): string {
  const phoneNumber =
    '(' +
    numbers.slice(0, 3).join('') +
    ') ' +
    numbers.slice(3, 6).join('') +
    '-' +
    numbers.slice(6, 10).join('');
  return phoneNumber;
}
