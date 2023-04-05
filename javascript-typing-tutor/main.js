const $letters = document.querySelectorAll('span');
const $spaces = document.querySelectorAll('.space');

let i = 0;
let j = 0;

document.addEventListener('keydown', (event) => {
  if (event.key === $letters[i].textContent) {
    $letters[i].className = 'right-letter';
    i++;
    $letters[i].className = 'curr-letter';
  } else if (event.code === 'Space' && $spaces[j] === $letters[i]) {
    $letters[i].className = 'spaces right-letter';
    i++;
    j++;
    $letters[i].className = 'curr-letter';
  } else {
    $letters[i].className = 'curr-letter wrong-letter';
  }
});
