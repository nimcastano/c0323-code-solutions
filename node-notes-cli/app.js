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
  const id = data.nextId;
  data.nextId++;
  notesObj[id] = process.argv[3];
  rewrite();
}

async function poof() {
  if (notesObj[process.argv[3]]) {
    delete notesObj[process.argv[3]];
    rewrite();
  } else {
    throw new Error('This ID does not exist!');
  }
}

async function update() {
  if (notesObj[process.argv[3]]) {
    notesObj[process.argv[3]] = process.argv[4];
    rewrite();
  } else {
    throw new Error('This ID does not exist!');
  }
}

const funcObj = {
  read: read,
  add: add,
  delete: poof,
  update: update,
};

const action = process.argv[2];

try {
  if (funcObj[action]) {
    await funcObj[action]();
  }
} catch (error) {
  console.error(error);
}
