import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';
const app = express();
app.use(express.json());

async function reader() {
  const data = await readFile('data.json', 'utf8');
  return JSON.parse(data);
}

async function writer(data, res) {
  try {
    await writeFile('data.json', JSON.stringify(data, null, 2));
  } catch (error) {
    const err = { error: 'An unexpected error occurred.' };
    console.error(error);
    res.status(500).json(err);
  }
}

app.get('/api/notes', async (req, res) => {
  try {
    const data = await reader();
    const notes = data.notes;
    const notesArr = [];
    for (const note in notes) {
      notesArr.push(notes[note]);
    }
    res.status(200).json(notesArr);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.get('/api/notes/:id', async (req, res) => {
  const data = await reader();
  const notes = data.notes;
  const id = req.params.id;
  if (isNaN(id) || id <= 0) {
    res.status(400).json({ error: `id must be a positive integer` });
  } else if (!notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    res.status(200).json(notes[id]);
  }
});

app.post('/api/notes', async (req, res) => {
  const data = await reader();
  const notes = data.notes;
  const obj = {};
  if (!req.body.content) {
    obj.error = `content is a required field`;
    res.status(400).json(obj);
  } else {
    obj.id = data.nextId++;
    obj.content = req.body.content;
    notes[obj.id] = obj;
    await writer(data, res);
    res.status(201).json(obj);
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  const id = req.params.id;
  const data = await reader();
  const notes = data.notes;
  const obj = {};
  if (id <= 0 || isNaN(id)) {
    obj.error = `The ID ${id} is not a positive integer.`;
    res.status(400).json(obj);
  } else if (!notes[id]) {
    obj.error = `Note with ID ${id} does not exist.`;
    res.status(404).json(obj);
  } else {
    delete notes[id];
    await writer(data, res);
    res.sendStatus(204);
  }
});

app.put('/api/notes/:id', async (req, res) => {
  const id = req.params.id;
  const data = await reader();
  const notes = data.notes;
  const obj = {};
  if (isNaN(id) || id <= 0) {
    obj.error = `The ID ${id} is not a positive integer.`;
    res.status(400).json(obj);
  } else if (!req.body.content) {
    obj.error = `content is a required field.`;
    res.status(400).json(obj);
  } else if (!notes[id]) {
    obj.error = `Note with ID ${id} does not exist.`;
    res.status(404).json(obj);
  } else {
    notes[id].content = req.body.content;
    await writer(data, res);
    res.status(200).json(notes[id]);
  }
});

app.listen(8080, () => {
  console.log('server is listening to port 8080');
});
