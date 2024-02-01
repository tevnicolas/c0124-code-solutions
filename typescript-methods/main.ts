const heroes: string[] = ['batman', 'superman', 'spiderman', 'wolverine'];
let randomNumber: number = Math.random();
randomNumber *= heroes.length;
const randomIndex: number = Math.floor(randomNumber);
console.log('randomIndex: ', randomIndex);
const randomHero: string = heroes[randomIndex];
console.log('randomHero: ', randomHero);

interface Book {
  title: string;
  author: string;
}

const library: Book[] = [
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

const lastBook: Book | undefined = library.pop();
console.log('lastBook: ', lastBook);

const firstBook: Book | undefined = library.shift();
console.log('firstBook: ', firstBook);

const js: Book = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css: Book = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library: ', library);

const fullName: string = 'Tev Nicolas';
const firstAndLastName: string[] = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);
const firstName: string = firstAndLastName[0];
const sayMyName: string = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName);

interface Employee {
  name: string;
  age: number;
  position: string;
}

const employee: Employee = { name: 'Dasher', age: 504, position: 'Lead Rider' };
const employeeKeys: unknown[] = Object.keys(employee);
console.log('employeeKeys: ', employeeKeys);
const employeeValues: unknown[] = Object.values(employee);
console.log('employeeValues: ', employeeValues);

const employeePairs: [string, any][] = Object.entries(employee);
console.log('employeePairs: ', employeePairs);
