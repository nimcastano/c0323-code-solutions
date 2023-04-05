const handleFocus = (event) => {
  console.log('focus event fired');
  console.log('event.target.name: ', event.target.name);
};

const handleBlur = (event) => {
  console.log('blur event was fired');
  console.log('event.target.name: ', event.target.name);
};

const handleInput = (event) => {
  console.log('event.target.name: ', event.target.name);
  console.log('event.target.value: ', event.target.value);
};

const $name = document.querySelector('#user-name');

$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);

const $email = document.querySelector('#user-email');

$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);

const $message = document.querySelector('#user-message');

$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);
