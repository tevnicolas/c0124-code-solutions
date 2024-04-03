# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?
  Create: insert, Read: select, Update: update, Delete: delete

- How do you add a row to a SQL table?
  insert into table_name ()
  values ();

- How do you add multiple rows to a SQL table at once?
  values (),
  ();

- How do you update rows in a database table?
  update table_name
  set column = value
  where condition;

- How do you delete rows from a database table?
  delete
  from table_name
  where condition;

- Why is it important to include a `where` clause in your `update` and `delete` statements?
  If you omit where then all the rows will be altered.

- How do you accidentally delete or update all rows in a table?
  By omitting where.

- How do you get back the modified row without a separate `select` statement?
  returning \*;

- Why did you get an error when trying to delete certain films?
  Foreign key constraints that prevent deleting a row if it's referenced by another table.

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
