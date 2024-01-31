function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}

const fiveSeconds: number = convertMinutesToSeconds(5);
console.log('convertMinutesToSeconds Result: ', fiveSeconds);

function greet(name: string): string {
  return 'Hey ' + name + '!';
}

const heyTev: string = greet('Tev');
console.log('greet Result: ', heyTev);

const getArea = (width: number, height: number): number => width * height;
console.log('getArea Result: ', getArea(5, 5));

interface Person {
  firstName: string;
  lastName: string;
}

const getFirstName = (person: Person): string => person.firstName;
const tevNicolas: string = getFirstName({
  firstName: 'Tev',
  lastName: 'Nicolas',
});
console.log('getFirstName Result: ', tevNicolas);

const getLastElement = (array: unknown[]): any => array[array.length - 1];
const newArrayGetLast: any = getLastElement([5, 'ten', 'fifteen', 20]);
console.log('getLastElement Result: ', newArrayGetLast);

function callOtherFunction(otherFunction: any, params: unknown): any {
  return otherFunction(params);
}

const twoLevelsOfFunctions: any = callOtherFunction(getLastElement, [3, 6, 8]);
console.log('callOtherFunctions Result: ', twoLevelsOfFunctions);
