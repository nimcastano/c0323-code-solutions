import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';
const app = express();
app.use(express.json());

async function reader() {
  const data = await readFile('data.json', 'utf8');
  return JSON.parse(data);
}

async function writer(data, res) {
  await writeFile('data.json', JSON.stringify(data, null, 2));
}

const errorHandler = (res, error) => {
  console.error(error);
  res.status(500).json({ error: 'an unexpected error occurred' });
};

app.get('/api/notes', async (req, res) => {
  try {
    const data = await reader();
    const notesArr = [];
    for (const note in data.notes) {
      notesArr.push(data.notes[note]);
    }
    res.status(200).json(notesArr);
  } catch (error) {
    errorHandler(res, error);
  }
});

app.get('/api/notes/:id', async (req, res) => {
  try {
    const data = await reader();
    const id = req.params.id;
    if (isNaN(id) || id <= 0) {
      res.status(400).json({ error: `id must be a positive integer` });
      return;
    } else if (!data.notes[id]) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
      return;
    }
    res.status(200).json(data.notes[id]);
  } catch (error) {
    errorHandler(res, error);
  }
});

app.post('/api/notes', async (req, res) => {
  try {
    if (!req.body.content) {
      res.status(400).json({ error: `content is a required field` });
      return;
    }
    const data = await reader();
    const obj = {
      id: data.nextId++,
      content: req.body.content,
    };
    data.notes[obj.id] = obj;
    await writer(data, res);
    res.status(201).json(obj);
  } catch (error) {
    errorHandler(res, error);
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await reader();

    if (id <= 0 || isNaN(id)) {
      res
        .status(400)
        .json({ error: `The ID ${id} is not a positive integer.` });
      return;
    } else if (!data.notes[id]) {
      res.status(404).json({ error: `Note with ID ${id} does not exist.` });
      return;
    }
    delete data.notes[id];
    await writer(data, res);
    res.sendStatus(204);
  } catch (error) {
    errorHandler(res, error);
  }
});

app.put('/api/notes/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await reader();
    const obj = {};
    if (isNaN(id) || id <= 0) {
      obj.error = `The ID ${id} is not a positive integer.`;
      res.status(400).json(obj);
      return;
    } else if (!req.body.content) {
      obj.error = `content is a required field.`;
      res.status(400).json(obj);
      return;
    } else if (!data.notes[id]) {
      obj.error = `Note with ID ${id} does not exist.`;
      res.status(404).json(obj);
      return;
    }
    data.notes[id].content = req.body.content;
    await writer(data, res);
    res.status(200).json(data.notes[id]);
  } catch (error) {
    errorHandler(res, error);
  }
});

app.listen(8080, () => {
  console.log('server is listening to port 8080');
});
