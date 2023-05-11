import { writeFile } from 'node:fs/promises';

const note = process.argv[2];

try {
  await writeFile('note.txt', note + '\n', 'utf8');
} catch (err) {
  console.log('Error: ', err.message);
}
