const $tabContainer = document.querySelector('.tab-container');
const $tabElements = document.querySelectorAll('.tab');
const $viewElements = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', (e) => {
  if (e.target.matches('.tab')) {
    for (let i = 0; i < $tabElements.length; i++) {
      if (e.target === $tabElements[i]) {
        $tabElements[i].className = 'tab active';
      } else {
        $tabElements[i].className = 'tab';
      }
    }

    const $dataView = e.target.getAttribute('data-view');

    for (let i = 0; i < $viewElements.length; i++) {
      if ($viewElements[i].getAttribute('data-view') === $dataView) {
        $viewElements[i].className = 'view';
      } else {
        $viewElements[i].className = 'view hidden';
      }
    }

  }
});
