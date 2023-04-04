const $circle = document.querySelector('.circle');
const $background = document.querySelector('.background');

$circle.addEventListener('click', (event) => {
  if ($circle.className === 'circle on') {
    $circle.className = 'circle off';
    $background.className = 'background dark';
  } else {
    $circle.className = 'circle on';
    $background.className = 'background light';
  }
});
