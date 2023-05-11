import { writeFile } from 'node:fs/promises';

try {
  await writeFile('random.txt', Math.random().toString() + '\n', 'utf');
} catch (err) {
  console.log('Error: ', err.message);
}
