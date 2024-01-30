interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

const student: StudentProps = {
  firstName: 'Tev',
  lastName: 'Nicolas',
  age: 25,
};

const fullName: string = student.firstName + ' ' + student.lastName;
console.log('fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Recording Engineer';

console.log('livesinIrvine: ', student.livesInIrvine);
console.log('previousOccupation: ', student.previousOccupation);
console.log('student: ', student);

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

const vehicle: Vehicle = {
  make: 'Volkswagon',
  model: 'Golf',
  year: 2012,
};

vehicle['color'] = 'blue';
vehicle['isConvertible'] = false;

console.log('vehicle color: ', vehicle.color);
console.log('isConvertible: ', vehicle.isConvertible);
console.log('vehicle', vehicle);

interface Pet {
  name?: string;
  kind?: string;
}

const pet: Pet = {
  name: 'Nola',
  kind: 'Cat',
};

delete pet.name;
delete pet.kind;

console.log('pet', pet);
