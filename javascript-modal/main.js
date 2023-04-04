const $openButton = document.querySelector('.open-button');
const $noButton = document.querySelector('.no-button');
const $modalContainer = document.querySelector('.close');

console.log($modalContainer);

$openButton.addEventListener('click', (event) => {
  $modalContainer.className = 'modal-container';
});

$noButton.addEventListener('click', (event) => {
  $modalContainer.className = 'close';
});
