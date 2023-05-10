import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';
import powerOf from './power-of.js';

const arg1 = process.argv[2];
const op = process.argv[3];
const arg2 = process.argv[4];

function result(func) {
  console.log('Result: ', func(Number(arg1), Number(arg2)));
}

const opsObj = {
  plus: add,
  minus: subtract,
  times: multiply,
  over: divide,
  'power-of': powerOf,
};

if (isNaN(arg1)) {
  console.log('invalid argument: ', arg1);
} else if (isNaN(arg2)) {
  console.log('invalid argument: ', arg2);
} else if (!opsObj[process.argv[3]]) {
  console.log('unknown operator: ', op);
} else {
  result(opsObj[process.argv[3]]);
}
