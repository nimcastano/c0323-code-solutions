import { writeFile, readFile } from 'node:fs/promises';

const ogFile = process.argv[2];
const newFile = process.argv[3];

try {
  const copyThis = await readFile(ogFile, 'utf8');
  await writeFile(newFile, copyThis);
} catch (err) {
  console.log('Error: ', err.message);
}
