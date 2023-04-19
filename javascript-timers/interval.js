const $heading = document.querySelector('.countdown-display');

const interval = setInterval(() => {
  let count = $heading.textContent;
  count--;
  if (count === 0) {
    $heading.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(interval);
  } else {
    $heading.textContent = count;
  }
}, 1000);
