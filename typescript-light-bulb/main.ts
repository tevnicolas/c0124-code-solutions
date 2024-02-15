const $circle = document.querySelector('#circle');
const $container = document.querySelector('#container');

if (!$circle) throw new Error('missing #circle div element');
if (!$container) throw new Error('missing #container div element');

$circle.addEventListener('click', (event) => {
  const $eventTarget = event.target as HTMLElement;
  if ($eventTarget.className === 'light') {
    $circle.setAttribute('class', 'dark');
    $container.setAttribute('class', 'black');
  } else {
    $circle.setAttribute('class', 'light');
    $container.setAttribute('class', 'white');
  }
});
