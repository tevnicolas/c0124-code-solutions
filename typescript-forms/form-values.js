'use strict';
const $contactForm = document.querySelector('#contact-form');
$contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = $contactForm.elements;
  const newObject = {};
  newObject.name = $formElements.name.value;
  newObject.email = $formElements.email.value;
  newObject.message = $formElements.message.value;
  console.log(newObject);
  $contactForm.reset();
});
