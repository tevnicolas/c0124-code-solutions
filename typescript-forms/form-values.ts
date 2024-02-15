interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const $contactForm = document.querySelector('#contact-form') as HTMLFormElement;

$contactForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const $formElements = $contactForm.elements as FormElements;
  const newObject: Record<string, unknown> = {};
  newObject.name = $formElements.name.value;
  newObject.email = $formElements.email.value;
  newObject.message = $formElements.message.value;
  console.log(newObject);
  $contactForm.reset();
});
