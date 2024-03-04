export function highestScoringWord(str: string): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alpArr = alphabet.split('');

  const strArr = str.split(' ');
  const winner = strArr.reduce(
    (acc: Record<string, number> | string, curr, i, arr) => {
      let points = 0;
      const newObj: Record<string, number> = {};
      for (const letter of curr) {
        points += alpArr.indexOf(letter);
      }
      if (points > Object.values(acc)[0] || Object.keys(acc).length === 0) {
        newObj[curr] = points;
        return i + 1 !== arr.length ? newObj : curr;
      }
      return i + 1 !== arr.length ? acc : Object.keys(acc)[0];
    },
    {}
  );
  return winner as string;
}
