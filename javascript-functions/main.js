const convertMinutesToSeconds = (mins) => {
  return mins * 60;
};

const convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult: ', convertMinutesToSecondsResult);

const greet = (name) => {
  return 'Hey, ' + name;
};

const greetResult = greet('Nim Possible');
console.log('value of greetResult: ', greetResult);

const getArea = (width, height) => {
  return width * height;
};

const getAreaResult = getArea(17, 42);
console.log('value of getAreaResult: ', getAreaResult);

const getFirstName = (obj) => {
  return obj.firstName;
};

const getFirstNameResult = getFirstName({ firstName: 'Nimmy', lastName: 'Turner' });
console.log('value of getFirstNameResult: ', getFirstNameResult);

const getLastElement = (array) => {
  return array[array.length - 1];
};

const getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('value of getLastElementResult: ', getLastElementResult);
