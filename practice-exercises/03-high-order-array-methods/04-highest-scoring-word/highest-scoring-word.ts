export function highestScoringWord(str: string): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alpArr: string[] = [];
  for (const letter of alphabet) {
    alpArr.push(letter);
  }

  const strArr = str.split(' ');
  const winner = strArr.reduce((acc: Record<string, number>, curr) => {
    let points = 0;
    const newObj: Record<string, number> = {};
    for (const letter of curr) {
      points += alpArr.indexOf(letter);
    }
    if (points > Object.values(acc)[0] || Object.keys(acc).length === 0) {
      newObj[curr] = points;
    }
    return newObj;
  }, {});

  return Object.keys(winner)[0];
}
