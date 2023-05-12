import { readFile, writeFile } from 'node:fs/promises';

const funcObj = {
  read: read,
  add: add,
  delete: poof,
  update: update,
};

try {
  let data = await readFile('data.json', 'utf8');
  data = JSON.parse(data);
  const notesObj = data.notes;
  const action = process.argv[2];
  if (!funcObj[action]) {
    throw new Error(`'${action}' is an invalid operation.`);
  } else {
    await funcObj[action](data, notesObj);
  }
} catch (error) {
  console.error(error);
}

// these functions will get hoisted

async function rewrite(data) {
  await writeFile('data.json', JSON.stringify(data, null, 2));
}

async function read(data, notesObj) {
  for (const [key, value] of Object.entries(notesObj)) {
    console.log(`${key}: ${value}`);
  }
}

async function add(data, notesObj) {
  const id = data.nextId++;
  notesObj[id] = process.argv[3];
  rewrite(data);
}

async function poof(data, notesObj) {
  const id = process.argv[3];
  if (!notesObj[id]) {
    throw new Error(`The ID '${id}' does not exist!`);
  }
  delete notesObj[id];
  rewrite(data);
}

async function update(data, notesObj) {
  const id = process.argv[3];
  if (!notesObj[id]) {
    throw new Error(`The ID '${id}' does not exist!`);
  }
  notesObj[id] = process.argv[4];
  rewrite(data);
}
