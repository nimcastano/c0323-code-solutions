const colors = ['red', 'white', 'blue'];

console.log('value of colors[0]: ', colors[0]);
console.log('value of colors[1]: ', colors[1]);
console.log('value of colors[2]: ', colors[2]);
console.log('America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.');

colors[2] = 'green';

console.log('Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.');
console.log(colors);

const students = ['James', 'Jake', 'John', 'Julia'];

const numberOfStudents = students.length;
console.log('There are ' + numberOfStudents + ' in the class.');

const lastStudent = students[students.length - 1];
console.log('The last student in the array is ' + lastStudent + '.');
console.log('value of students: ', students);
