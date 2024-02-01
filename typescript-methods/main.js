'use strict';
const heroes = ['batman', 'superman', 'spiderman', 'wolverine'];
let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex: ', randomIndex);
const randomHero = heroes[randomIndex];
console.log('randomHero: ', randomHero);
const library = [
  {
    title: 'Year of the Monkey',
    author: 'Patti Smith',
  },
  {
    title: 'Pihkal',
    author: 'Alexander Shulgin & Ann Shulgin',
  },
  {
    title: 'Room to Dream',
    author: 'David Lynch',
  },
];
const lastBook = library.pop();
console.log('lastBook: ', lastBook);
const firstBook = library.shift();
console.log('firstBook: ', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library: ', library);
const fullName = 'Tev Nicolas';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName);
const employee = { name: 'Dasher', age: 504, position: 'Lead Rider' };
const employeeKeys = Object.keys(employee);
console.log('employeeKeys: ', employeeKeys);
const employeeValues = Object.values(employee);
console.log('employeeValues: ', employeeValues);
const employeePairs = Object.entries(employee);
console.log('employeePairs: ', employeePairs);
