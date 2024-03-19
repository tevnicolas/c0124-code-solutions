'use strict';
async function getRequest() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Yikes Error Code: ' + response.status);
    const array = await response.json();
    console.log('Array', array);
  } catch (error) {
    console.log('ThrowError', error);
  }
}
getRequest();
