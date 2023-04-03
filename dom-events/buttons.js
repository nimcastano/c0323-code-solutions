const handleClick = (event) => {
  console.log('button clicked');
  console.log('value of event: ', event);
  console.log('value of target: ', event.target);
};

const $click = document.querySelector('.click-button');

$click.addEventListener('click', handleClick);

const handleMouseover = (event) => {
  console.log('button hovered');
  console.log('value of event: ', event);
  console.log('value of target: ', event.target);
};

const $hover = document.querySelector('.hover-button');

$hover.addEventListener('mouseover', handleMouseover);

const handleDoubleClick = (event) => {
  console.log('button double-clicked');
  console.log('value of event: ', event);
  console.log('value of target: ', event.target);
};

const $double = document.querySelector('.double-click-button');

$double.addEventListener('dblclick', handleDoubleClick);
