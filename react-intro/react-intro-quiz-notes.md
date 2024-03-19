# react-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is React?

React is a free and open-source front-end JavaScript framework for building user interfaces or UI components. It was developed by Facebook.

- What is a React component?

It's a function that can combine javascript, jsx, css and takes zero or 1 parameters (object), returns a jsx element. Starts with upper case letter.

- How do you mount a React app (root component) to the DOM?

Mounting component means put into the DOM. Typically use the ReactDOM.render() method provided by the 'react-dom' package. This method takes two arguments: the React component you want to render and the DOM node where you want to mount the component.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

- What are some other popular frontend frameworks?

Angular, Vue, Svelt

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
