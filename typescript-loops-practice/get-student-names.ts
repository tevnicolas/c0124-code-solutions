/* exported getStudentNames */

const getStudentNames = (students: Record<string, unknown>[]): unknown[] => {
  const newArray = [];
  for (let i = 0; i < students.length; i++) {
    newArray.push(students[i].name);
  }
  return newArray;
};
