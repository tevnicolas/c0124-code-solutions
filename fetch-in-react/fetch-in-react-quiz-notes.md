# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What browser function can be used to make HTTP requests to a server in React?
  fetch inside a useEffect

- How can `useEffect` be used to load data for a component?
  Inside useEffect you load data likely in an async function, then calling it, then use the dependency to indicate when you want to reload that data.

- How do you use `useEffect` to load component data just once when the component mounts?
  Empty dependency array.

- How do you use `useEffect` to load component data every time the data key changes?
  By putting the data key in the dependency array.

- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  Manage all your data accesses with a third-party data management library. Some good open source packages are React Query and Vercel SWR.

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
