import express from 'express';
import pg from 'pg';

const app = express();
app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

const errorHandler = (res, error) => {
  console.error(error);
  res.status(500).json({ error: `an unexpected error occurred` });
};

const sqlObj = {
  get: `
    select *
      from "grades"`,
  getId: `
    select *
      from "grades"
      where "gradeId" = $1`,
  post: `
    insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *;`,
  put: `
    update "grades"
      set "name" = $2,
          "course" = $3,
          "score" = $4
      where "gradeId" = $1
      returning *;`,
  delete: `
    delete
    from "grades"
    where "gradeId" = $1`,
};

app.get('/api/grades', async (req, res) => {
  try {
    const sql = sqlObj.get;
    const result = await db.query(sql);
    res.status(200).json(result.rows);
  } catch (error) {
    errorHandler(res, error);
  }
});

app.get('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = req.params.gradeId;
    const sql = sqlObj.getId;
    const result = await db.query(sql, [gradeId]);
    if (!result.rows[0]) {
      res
        .status(404)
        .json({ error: `cannot find grade with 'gradeId' ${gradeId}` });
      return;
    }
    res.status(200).json(result.rows);
  } catch (error) {
    errorHandler(res, error);
  }
});

app.post('/api/grades', async (req, res) => {
  try {
    const { name, course, score } = req.body;
    if (!name || !course || !score) {
      res
        .status(400)
        .json({ error: `name, course and score are required fields` });
      return;
    } else if (isNaN(score) || score < 0) {
      res.status(400).json({ error: `score must be a positive number` });
      return;
    }
    const sql = sqlObj.post;
    const params = [name, course, score];
    const result = await db.query(sql, params);
    res.status(201).json(result.rows);
  } catch (error) {
    errorHandler(res, error);
  }
});

app.put('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = req.params.gradeId;
    const { name, course, score } = req.body;
    if (!name || !course || !score) {
      res
        .status(400)
        .json({ error: `name, course and score are required fields` });
      return;
    } else if (isNaN(score) || score < 0) {
      res.status(400).json({ error: `score must be a positive number` });
      return;
    }
    const sql = sqlObj.put;
    const params = [gradeId, name, course, score];
    const result = await db.query(sql, params);
    if (!result.rows[0]) {
      res
        .status(404)
        .json({ error: `cannot find grade with 'gradeId' ${gradeId}` });
      return;
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    errorHandler(res, error);
  }
});

app.delete('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = req.params.gradeId;
    if (gradeId === undefined) {
      res.status(400).json({ error: `gradeId is a required field` });
      return;
    } else if (isNaN(gradeId) || gradeId < 1) {
      res.status(400).json({ error: `${gradeId} is an invalid gradeId` });
      return;
    }
    const sql = sqlObj.delete;
    const params = [gradeId];
    const result = await db.query(sql, params);
    if (result.rowCount === 0) {
      res
        .status(404)
        .json({ error: `cannot find grade with 'gradeId' ${gradeId}` });
      return;
    }
    res.sendStatus(204);
  } catch (error) {
    errorHandler(res, error);
  }
});

app.listen(8080, () => {
  console.log('server listening to port 8080');
});
