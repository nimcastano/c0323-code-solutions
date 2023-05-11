// import { read } from 'node:fs';
import { readFile } from 'node:fs/promises';

const [, , ...files] = process.argv;

async function readAll(books) {
  const proBooks = books.map(async (el) => {
    return await readFile(el, 'utf8');
  });

  const done = await Promise.all(proBooks);
  done.forEach((el) => console.log(el));
}

await readAll(files);
