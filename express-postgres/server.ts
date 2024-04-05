import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';
import pg from 'pg';

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
      select
        "filmId",
        "title"
      from "films"
      order by "replacementCost" desc;
    `;
    const result = await db.query(sql);
    res.send(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/film', async (req, res, next) => {
  try {
    const { filmId } = req.query;
    if (filmId === undefined) {
      throw new ClientError(400, 'filmId is required');
    }
    const sql = `
      select
        "title"
      from "films"
      where "filmId" = $1;
    `;
    const params = [filmId] as string[];
    const result = await db.query(sql, params);
    if (!result.rows[0]) {
      throw new ClientError(404, `film ${filmId} not found`);
    }
    res.send(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.put('/api/film', async (req, res, next) => {
  try {
    const { filmId, title } = req.query;
    if (filmId === undefined || title === undefined) {
      throw new ClientError(400, 'filmId & title is required');
    }
    const sql = `
      update "films"
        set "title" = $2
        where "filmId" = $1
        returning *;
    `;
    const params = [filmId, title] as string[];
    const result = await db.query(sql, params);
    if (!result.rows[0]) {
      throw new ClientError(400, `film ${filmId} is not found`);
    }
    res.send(
      `Success! filmId ${result.rows[0].filmId} has been updated with title ${result.rows[0].title}.`
    );
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
