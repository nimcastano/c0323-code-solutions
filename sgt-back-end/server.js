import express from 'express';
import pg from 'pg';

const app = express();
app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

app.get('/api/grades', async (req, res) => {
  try {
    const sql = `
      select *
      from "grades"
      `;
    const result = await db.query(sql);
    const grade = result.rows;
    res.status(200).json(grade);
  } catch (error) {
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

// app.post('/api/grades', async (req, rest) => {
//   try {
//     const
//   }
// })

app.listen(8081, () => {
  console.log('server listening to port 8080');
});
