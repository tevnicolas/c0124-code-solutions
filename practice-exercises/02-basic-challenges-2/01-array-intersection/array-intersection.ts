export function arrayIntersection(arr1: unknown[], arr2: unknown[]): unknown[] {
  const arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      arr3.push(arr1[i]);
    }
  }
  return arr3;
}

// export function arrayIntersection(arr1: unknown[], arr2: unknown[]): unknown[] {
//   const arr3 = [];
//   const newSet = new Set(arr1);
//   for (let i = 0; i < arr2.length; i++) {
//     if (newSet.has(arr2[i])) {
//       arr3.push(arr2[i]);
//     }
//   }
//   return arr3;
// }

// export function arrayIntersection(arr1: unknown[], arr2: unknown[]): unknown[] {
//   const arr3 = arr1.reduce((acc: unknown[], curr: unknown): unknown[] => {
//     if (arr2.includes(curr)) {
//       acc.push(curr);
//     }
//     return acc;
//   }, [])
//   return arr3;
// }

// export function arrayIntersection(arr1: unknown[], arr2: unknown[]): unknown[] {
//   const arr3 = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let x = 0; x < arr2.length; x++) {
//       if (JSON.stringify(arr1[i]) === JSON.stringify(arr2[x])) {
//         arr3.push(arr1[i]);
//       }
//     }
//   }
//   return arr3;
// }
