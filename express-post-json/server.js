import express from 'express';

const app = express();

const grades = {};

let nextId = 1;

app.get('/api/grades', (req, res) => {
  const gradesArr = [];
  for (const grade in grades) {
    gradesArr.push(grades[grade]);
  }
  res.status(201).json(gradesArr);
});

const middle = express.json();

app.use(middle);

app.post('/api/grades', (req, res) => {
  const obj = req.body;
  obj.id = nextId++;
  grades[obj.id] = obj;
  res.json(obj);
});

app.listen(8080, () => {
  console.log('server is listening to port 8080');
});
