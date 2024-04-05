import express from 'express';
import pg from 'pg';
import { errorMiddleware, ClientError } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());

// type Grade = {
//   gradeId?: number;
//   name: string;
//   course: string;
//   score: number; // A number between 0 and 100
// };

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "grades"
    `;
    const result = await db.query(sql);
    res.status(200).json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, 'GradeId must be a number.');
    }
    const sql = `
      select *
        from "grades"
        where "gradeId" = $1;
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    if (!result.rows[0]) {
      throw new ClientError(404, 'Grade not found.');
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (!name) throw new ClientError(400, 'Name must be provided.');
    if (!course) throw new ClientError(400, 'Course must be provided.');
    if (!Number.isInteger(+score) || +score < 0 || +score > 100) {
      throw new ClientError(400, 'Score must be a number from 0-100.');
    }
    const sql = `
      insert into "grades" ("name", "course", "score")
        values ($1, $2, $3)
        returning *;
    `;
    const params = [name, course, score];
    const result = await db.query(sql, params);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    const { gradeId } = req.params;
    if (!name) throw new ClientError(400, 'Name must be provided.');
    if (!course) throw new ClientError(400, 'Course must be provided.');
    if (!Number.isInteger(+score) || +score < 0 || +score > 100) {
      throw new ClientError(400, 'Score must be a number from 0-100.');
    }
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, 'GradeId must be a number.');
    }
    const sql = `
      update "grades"
        set "name" = $1,
            "course" = $2,
            "score" = $3
        where "gradeId" = $4
        returning *;
    `;
    const params = [name, course, score, gradeId];
    const result = await db.query(sql, params);
    if (!result.rows[0]) {
      throw new ClientError(404, 'Grade not found.');
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, 'GradeId must be a number.');
    }
    const sql = `
      delete
        from "grades"
        where "gradeId" = $1
        returning *;
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    if (!result.rows[0]) {
      throw new ClientError(404, 'Grade not found.');
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
