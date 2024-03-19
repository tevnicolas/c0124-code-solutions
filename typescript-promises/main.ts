import { takeAChance } from './take-a-chance.js';

const promise = takeAChance('Tev');

promise
  .then((message) => console.log('success'))
  .catch((error) => console.log(error.message));
