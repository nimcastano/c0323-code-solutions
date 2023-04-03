let numOfClicks = 0;

const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', (event) => {
  numOfClicks++;
  $clickCount.textContent = 'Clicks: ' + numOfClicks;
  if (numOfClicks < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (numOfClicks < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (numOfClicks < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (numOfClicks < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (numOfClicks < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
});
