'use strict';
const $countdown = document.querySelector('.countdown-display');
if (!$countdown) throw new Error('No countdown element');
let counter = Number($countdown.textContent);
const intervalID = setInterval(() => {
  if (counter > 0) {
    $countdown.textContent = String(counter--);
  } else {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
}, 1000);
