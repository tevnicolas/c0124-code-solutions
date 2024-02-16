const newArray = [
  { isbn: 10000000001, title: 'Hello', author: 'Mr. Hello' },
  { isbn: 10000000002, title: 'Goodbye', author: 'Mr. Goodbye' },
  { isbn: 10000000003, title: 'Thank You!', author: 'Mr. Kindness' },
];

console.log('newArray: ', newArray);
console.log('typeof newArray: ', typeof newArray);
console.log('JSON string of newArray: ', JSON.stringify(newArray));

const studentJSON = '{"id": 98065, "name": "Tony"}';

console.log('studentJSON: ', studentJSON);
console.log('typeof studentJSON: ', typeof studentJSON);

const parsedJSONObj = JSON.parse(studentJSON);

console.log('parsed JSON Obj: ', parsedJSONObj);
