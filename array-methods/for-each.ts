const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

values.forEach((num) => {
  console.log(num);
});

values.forEach((num, index, array) => {
  console.log(array[array.length - 1 - index]);
});
