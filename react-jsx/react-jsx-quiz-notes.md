# react-jsx-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is JSX?

JSX is a JavaScript extension that allows developers to write the code for dynamic DOM creation in a syntax that is very similar to standard HTML.
JSX allows the developer to quickly create complex HTML structures, add attribute values, and apply CSS styling via classes.

- How does React use JSX to render components?

JSX is transformed using a tool like Babel. Babel compiles JSX down to React.createElement() calls. These calls create JavaScript objects for each element, which React calls "React elements". React takes these React elements and ultimately renders them to the DOM. This is done using the ReactDOM.render() method in web applications. This method takes a React element and a DOM container node, and updates the container with the React elements and any of its children.

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
