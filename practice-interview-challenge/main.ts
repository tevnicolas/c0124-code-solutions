interface RangeReportObj {
  total: number;
  odds: number[];
  evens: number[];
  range: number[];
  average: number;
}

function getRangeReport(start: number, end: number): RangeReportObj {
  const average = (start + end) / 2;
  const odds = [];
  const evens = [];
  const range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
    if (i % 2 === 0) {
      evens.push(i);
    } else {
      odds.push(i);
    }
  }
  const total = range.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  const newObj = {
    total,
    odds,
    evens,
    range,
    average,
  };
  return newObj;
}

console.log(getRangeReport(1, 10)); // -> {average: 5.5, evens:[2,4,6,8,10], odds:[1,3,5,7,9], range:[1,2,3,4,5,6,7,8,9,10], total: 55 }
console.log(getRangeReport(1, 5)); // -> {average: 3, evens:[2,4], odds:[1,3,5], range:[1,2,3,4,5], total: 15 }
