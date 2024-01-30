const width: number = 8;
const height: number = 10;
const area: number = width * height;
console.log('area: ', area);
console.log('typeof area: ', typeof area);

const bill: number = 1001;
const payment: number = 211334;
const change: number = payment - bill;
console.log('change: ', change);
console.log('typeof change: ', typeof change);

const quizzes: number = 60;
const midterm: number = 70;
const final: number = 90;
const grade: number = (quizzes + midterm + final) / 3;
console.log('grade: ', grade);
console.log('typeof grade: ', typeof grade);

const firstName: string = 'Tev';
const lastName: string = 'Nicolas';
const fullName: string = firstName + ' ' + lastName;
console.log('fullName: ', fullName);
console.log('typeof fullName: ', typeof fullName);

const pH: number = 8;
const isAcidic: boolean = pH < 7;
console.log('isAcidic: ', isAcidic);
console.log('typeof isAcidic: ', typeof isAcidic);

const headCount: number = 250;
const isSparta: boolean = headCount === 300;
console.log('isSparta: ', isSparta);
console.log('typeof isSparta: ', typeof isSparta);

let motto: string = fullName;
motto += ' is the GOAT';
console.log('motto: ', motto);
console.log('typeof motto: ', typeof motto);
