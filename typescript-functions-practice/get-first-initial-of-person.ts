/* exported getFirstInitialOfPerson */

interface Person {
  firstName: string;
  lastName: string;
}

const getFirstInitialOfPerson = (person: Person): string => person.firstName[0];
