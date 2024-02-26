const $message = document.querySelector('.message') as HTMLHeadingElement;

setTimeout(() => {
  $message.textContent = 'Hello There';
}, 2000);
