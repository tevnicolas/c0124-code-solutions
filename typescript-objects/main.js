'use strict';
const student = {
  firstName: 'Tev',
  lastName: 'Nicolas',
  age: 25,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('fullName: ', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Recording Engineer';
console.log('livesinIrvine: ', student.livesInIrvine);
console.log('previousOccupation: ', student.previousOccupation);
console.log('student: ', student);
const vehicle = {
  make: 'Volkswagon',
  model: 'Golf',
  year: 2012,
};
vehicle['color'] = 'blue';
vehicle['isConvertible'] = false;
console.log('vehicle color: ', vehicle.color);
console.log('isConvertible: ', vehicle.isConvertible);
console.log('vehicle', vehicle);
const pet = {
  name: 'Nola',
  kind: 'Cat',
};
delete pet.name;
delete pet.kind;
console.log('pet', pet);
