export type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
export type Simulation = {
  dice1: DiceRoll;
  dice2: DiceRoll;
  sum: number;
  result: 'win' | 'lose' | 'roll again';
};

export function diceGameSimulation(numSimulations: number): Simulation[] {
  const arr: Simulation[] = [];

  for (let i = 0; i < numSimulations; i++) {
    const dice1 = (Math.floor(Math.random() * 6) + 1) as DiceRoll;
    const dice2 = (Math.floor(Math.random() * 6) + 1) as DiceRoll;
    const sum = dice1 + dice2;
    let result: 'win' | 'lose' | 'roll again';
    switch (sum) {
      case 7:
      case 11:
        result = 'win';
        break;
      case 2:
      case 3:
      case 12:
        result = 'lose';
        break;
      default:
        result = 'roll again';
        break;
    }
    const obj: Simulation = {
      dice1,
      dice2,
      sum,
      result,
    };
    arr.push(obj);
  }

  return arr;
}
