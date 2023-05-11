// import { read } from 'node:fs';
import { readFile } from 'node:fs/promises';

const [, , ...files] = process.argv;

const proBooks = files.map((el) => readFile(el, 'utf8'));

try {
  const done = await Promise.all(proBooks);
  done.forEach((el) => console.log(el));
} catch (err) {
  console.log('Error: ', err.message);
}
