const $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', (e) => {
  console.log('event.target: ', e.target);
  console.log('event.target.tagName: ', e.target.tagName);
  if (e.target.tagName === 'BUTTON') {
    const $closest = e.target.closest('.task-list-item');
    console.log($closest);
    $closest.remove();
  }
});
