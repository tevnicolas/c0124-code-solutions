export function countDown(num: number): void {
  if (num <= 0) {
    console.log('All done!');
    return;
  }

  console.log(num);
  num--;
  countDown(num);
}
