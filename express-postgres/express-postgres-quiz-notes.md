# express-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the pg NPM package?
  To make querying the database possible through express.

- How do you tell pg which database to connect to?

```javascript
import pg from 'pg';
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});
```

- How do you send SQL to PostgreSQL from your Express server?
  By creating a variable with sql and an array of params and then awaiting db.query(sql, params)

- How do you get the rows return from the SQL query?
  result.rows

- What must you always remember to put around your asynchronous route handlers? Why?
  try/catch. To catch errors!

- What is a SQL Injection Attack and how do you avoid it in pg?
  It's where hackers exploit the ability to write directly into the sql query.
  Using the params array parameter for some reason prevents this.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
