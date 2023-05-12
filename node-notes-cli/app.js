import { readFile, writeFile } from 'node:fs/promises';

let data = await readFile('data.json', 'utf8');
data = JSON.parse(data);
const notesObj = data.notes;

async function rewrite() {
  await writeFile('data.json', JSON.stringify(data, null, 2));
}

async function read() {
  for (const [key, value] of Object.entries(notesObj)) {
    console.log(`${key}: ${value}`);
  }
}

async function add() {
  const id = data.nextId++;
  notesObj[id] = process.argv[3];
  rewrite();
}

async function poof() {
  const id = process.argv[3];
  if (!notesObj[id]) {
    throw new Error(`The ID ${id} does not exist!`);
  }
  delete notesObj[id];
  rewrite();
}

async function update() {
  const id = process.argv[3];
  if (!notesObj[id]) {
    throw new Error(`The ID ${id} does not exist!`);
  }
  notesObj[id] = process.argv[4];
  rewrite();
}

const funcObj = {
  read: read,
  add: add,
  delete: poof,
  update: update,
};

const action = process.argv[2];

try {
  if (!funcObj[action]) {
    throw new Error(`'${action}' is an invalid operation.`);
  } else {
    await funcObj[action]();
  }
} catch (error) {
  console.error(error);
}
