const $image = document.querySelector('.image') as HTMLImageElement;
if (!$image) throw new Error('Woah no image!');

const $row = document.querySelector('.row');
if (!$row) throw new Error('Woah no row!');

const $leftArrow = document.querySelector('#left');
const $rightArrow = document.querySelector('#right');
const $0 = document.querySelector('#\\30');
const $1 = document.querySelector('#\\31');
const $2 = document.querySelector('#\\32');
const $3 = document.querySelector('#\\33');
const $4 = document.querySelector('#\\34');

if (!$leftArrow) throw new Error('Woah no leftArrow!');
if (!$rightArrow) throw new Error('Woah no rightArrow!');
if (!$0) throw new Error('Woah no zero circle!');
if (!$1) throw new Error('Woah no one circle!');
if (!$2) throw new Error('Woah no two circle!');
if (!$3) throw new Error('Woah no three circle!');
if (!$4) throw new Error('Woah no four circle!');

const imageNumber = [
  '/typescript-carousel/images/001.png',
  '/typescript-carousel/images/004.png',
  '/typescript-carousel/images/007.png',
  '/typescript-carousel/images/025.png',
  '/typescript-carousel/images/039.png',
];

let counter = 0;

function carouselLogic(): void {
  if (counter < 4) {
    counter++;
    $image.setAttribute('src', imageNumber[counter]);
    toggleCircles();
  } else {
    counter = 0;
    toggleCircles();
    $image.setAttribute('src', imageNumber[counter]);
    counter = 1;
  }
}

function toggleCircles(): void {
  for (let i = 0; i < 5; i++) {
    if (i === counter) {
      const $circle = document.querySelector(
        '#\\3' + String(counter)
      ) as HTMLElement;
      $circle.className = 'fa-solid fa-circle';
    } else {
      const $circlePrevious = document.querySelector('#\\3' + i) as HTMLElement;
      $circlePrevious.className = 'fa-regular fa-circle';
    }
  }
}

let intervalID = setInterval(carouselLogic, 3000);

$row.addEventListener('click', (event: Event): void => {
  const $eventTarget = event.target as HTMLElement;
  clearInterval(intervalID);
  switch ($eventTarget) {
    case $leftArrow:
      counter--;
      if (counter < 0) {
        counter = 4;
      }
      break;
    case $rightArrow:
      counter++;
      if (counter > 4) {
        counter = 0;
      }
      break;
    case $0:
      counter = 0;
      break;
    case $1:
      counter = 1;
      break;
    case $2:
      counter = 2;
      break;
    case $3:
      counter = 3;
      break;
    case $4:
      counter = 4;
      break;
  }
  $image.setAttribute('src', imageNumber[counter]);
  toggleCircles();
  intervalID = setInterval(carouselLogic, 3000);
});
