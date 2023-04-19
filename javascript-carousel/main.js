const $imgNodelist = document.querySelectorAll('img');
const $circleNodelist = document.querySelectorAll('i');

const $leftArr = document.querySelector('.left-arrow');
const $rightArr = document.querySelector('.right-arrow');

let nextImg;
let current = 0;

const hider = (current) => {
  $imgNodelist[current].className = '';
  $circleNodelist[current].className = 'fa fa-circle';
  for (let i = 0; i < $imgNodelist.length; i++) {
    if (i !== current) {
      $imgNodelist[i].className = 'hidden';
      $circleNodelist[i].className = 'fa-regular fa-circle';
    }
  }
};

function carousel() {
  nextImg = setInterval(() => {
    current++;
    if (current >= $imgNodelist.length) {
      current = current % ($imgNodelist.length);
    }
    hider(current);
  }, 3000);
}

$leftArr.addEventListener('click', (e) => {
  clearInterval(nextImg);
  if (current !== 0) {
    current--;
  } else {
    current = 4;
  }
  hider(current);
  carousel();
});

$rightArr.addEventListener('click', (e) => {
  clearInterval(nextImg);
  if (current !== 4) {
    current++;
  } else {
    current = 0;
  }
  hider(current);
  carousel();
});

const $span = document.querySelector('span');

$span.addEventListener('click', (e) => {
  clearInterval(nextImg);
  if (e.target.tagName === 'I') {
    const $dataView = e.target.getAttribute('data-view');
    for (let i = 0; i < $circleNodelist.length; i++) {
      if ($circleNodelist[i].getAttribute('data-view') === $dataView) {
        current = i;
        hider(current);
        carousel();
        break;
      }
    }
  }
});
