const $heading = document.querySelector('.countdown-display');

const intrvl = setInterval(() => {
  let count = $heading.textContent;
  count--;
  if (count === 0) {
    $heading.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intrvl);
  } else {
    $heading.textContent = count;
  }
}, 1000);
