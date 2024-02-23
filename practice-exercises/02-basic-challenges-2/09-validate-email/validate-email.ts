export function validateEmail(email: string): boolean {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const condition1 = email.includes('@');
  const condition2 = email.includes('.');
  const condition3 = alphabet.includes(email[0]);
  const condition4 = alphabet.includes(email[email.length - 1]);
  const condition5 = email.indexOf('.', email.indexOf('@')) > 0;
  const condition6 = alphabet.includes(email[email.indexOf('@') + 1]);
  const condition7 = alphabet.includes(email[email.indexOf('.') + 1]);
  const condition8 = email.indexOf('@', email.indexOf('@') + 1) === -1;

  return (
    condition1 &&
    condition2 &&
    condition3 &&
    condition4 &&
    condition5 &&
    condition6 &&
    condition7 &&
    condition8
  );
}
