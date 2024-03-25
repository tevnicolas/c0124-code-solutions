/**
 * Checks if two strings are valid anagrams of each other.
 */
export function validAnagrams(str1: string, str2: string): boolean {
  const arr1 = String(str1.split('').sort());
  const arr2 = String(str2.split('').sort());

  return arr1 === arr2;
}
