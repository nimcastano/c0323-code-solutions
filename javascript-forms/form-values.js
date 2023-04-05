const $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const obj = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value
  };
  console.log('submitted obj: ', obj);
  $contactForm.reset();
});
