/* exported getStudentNames */
const getStudentNames = students => {
  const names = [];
  for (const student of students) {
    names.push(student.name);
  }
  return names;
};
