# express-post-json-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the significance of an HTTP request's method?
  It tells the server what to do with the data addressed by the URL.

- What is the significance of an HTTP response's status?
  It indicates the result of the attempt to understand and satisfy the client's request.
  1xx informational
  2xx successful
  3xx redirection
  4xx client error
  5xx server error

- What does the express.json() middleware do and when would you need it?
  Parses incoming requests with JSON.
  Used when a client submits form data or API requests that include JSON data.
  You can then destructure with a req.body object.

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
