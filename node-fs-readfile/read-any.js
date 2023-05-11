import { readFile } from 'node:fs/promises';

const file = process.argv[2];

async function reader(file) {
  try {
    const data = await readFile(file, 'utf8');
    console.log(data);
  } catch (err) {
    console.log('Error: ', err.message);
  }
}

await reader(file);
