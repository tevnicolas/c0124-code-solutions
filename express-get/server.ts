import express from 'express';
import pg from 'pg';
import { errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
      select "title",
            "replacementCost",
            "filmId",
            "description"
        from "films"
        order by "replacementCost" desc
        limit 2;
    `;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/:filmId', async (req, res, next) => {
  try {
    const sql = `
      select "title",
            "replacementCost",
            "filmId",
            "description"
        from "films"
        where "filmId" = $1
        limit 1;
    `;
    const params = [req.params.filmId];
    const result = await db.query(sql, params);
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
