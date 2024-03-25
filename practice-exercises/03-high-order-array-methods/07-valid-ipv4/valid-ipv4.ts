export function isValidIPv4(input: string): boolean {
  const numOfDots = input.split('').reduce((acc, curr) => {
    if (curr === '.') {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
  if (numOfDots !== 3) return false;

  return input.split('.').every((value) => {
    const noLeadZero = value === parseInt(value).toString();
    return Number(value) >= 0 && Number(value) <= 255 && noLeadZero;
  });
}

// export function isValidIPv4(input: string): boolean {
//   const ipv4Pattern =
//     /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])$/;

//   return ipv4Pattern.test(input);
// }
