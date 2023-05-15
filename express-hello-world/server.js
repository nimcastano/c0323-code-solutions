import express from 'express';

const app = express();

app.use((req, res) => {
  console.log(req.method);
  res.send('hello, world!');
});

app.listen(8080, () => {
  console.log('Server listening to port 8080');
});
