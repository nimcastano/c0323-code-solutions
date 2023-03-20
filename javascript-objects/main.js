const student = {
  firstName: 'Nimrod',
  lastName: 'Castano',
  age: 25
};

const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Airport Agent';

console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);
console.log('value of student: ', student);

const vehicle = {
  make: 'Porshce',
  model: '718 GT4',
  year: 2020
};

vehicle['color'] = 'green';
vehicle['isConvertible'] = false;

console.log("value of vehicle['color']: ", vehicle['color']);
console.log("value of vehicle['isConvertible']: ", vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

const pet = {
  name: 'Leviosa',
  type: 'cat'
};

delete pet.name;
delete pet['type'];

console.log('value of pet: ', pet);
