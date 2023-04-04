const $openButton = document.querySelector('.open-button');
const $noButton = document.querySelector('.no-button');
const $modalContainer = document.querySelector('.close');

$openButton.addEventListener('click', (event) => {
  $modalContainer.className = 'modal-container';
});

$noButton.addEventListener('click', (event) => {
  $modalContainer.className = 'close';
});
