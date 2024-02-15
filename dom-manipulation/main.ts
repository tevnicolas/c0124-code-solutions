let counter = 0;

const $hotButton = document.querySelector('.hot-button');

const $clickCount = document.querySelector('.click-count');

if (!$hotButton) throw new Error('The $hotButton query failed');

$hotButton.addEventListener('click', (): void => {
  counter++;
  if (!$hotButton || !$clickCount)
    throw new Error('The $hotButton or $clickCount query failed');
  $clickCount.textContent = 'Clicks: ' + String(counter);
  if (counter < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (counter < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (counter < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (counter < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (counter < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
});
