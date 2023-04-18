function ExampleConstructor() {}

console.log('value of prototype prop: ', ExampleConstructor.prototype);
console.log('typeof prototype prop: ', typeof ExampleConstructor.prototype);

const constructed = new ExampleConstructor();
console.log('value of constructed: ', constructed);

const instance = constructed instanceof ExampleConstructor;
console.log(instance);
