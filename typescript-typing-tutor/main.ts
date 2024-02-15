const $span = document.querySelectorAll('#phrase > span');
const $input = document.querySelector('body');

if (!$span) throw new Error('Error! No letters available.');
if (!$input) throw new Error('Error! no input available.');

$span[0].setAttribute('class', 'underlined');
let currentIndex = 0;
$input.addEventListener('keydown', (event) => {
  if (event.key === $span[currentIndex].textContent) {
    $span[currentIndex].setAttribute('class', 'green');
    $span[currentIndex + 1].setAttribute('class', 'underlined');
    currentIndex++;
  } else {
    $span[currentIndex].setAttribute('class', 'red');
  }
});
