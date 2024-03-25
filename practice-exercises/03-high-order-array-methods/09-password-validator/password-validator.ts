export function validatePassword(password: string): boolean {
  const test1 = password.length >= 8;
  const test2 = password
    .split('')
    .some((c) => c.replace(/[^a-zA-Z]/g, '') === c.toUpperCase());
  const test3 = password
    .split('')
    .some((c) => c.replace(/[^a-zA-Z]/g, '') === c.toLowerCase());
  const test4 = password.split('').some((c) => c === String(Number(c)));

  return test1 && test2 && test3 && test4;
}
