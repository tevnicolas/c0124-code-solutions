# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  To check values and to debug.

- What is the purpose of events and event handling?
  They allow interactivity through the firing of events and javascript code run when the events fire.

- Are all possible parameters required to use a JavaScript method or function?
  Not they are not required.

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener()

- What is a callback function?
  A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

- What object is passed into an event listener callback when the event fires?
  An Event object.

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  event.target is a property in JavaScript that is part of the event object. It refers to the DOM element that was the actual target of the event. In other words, event.target identifies the element on which the event occurred. I would check with MDN.

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```

The first example is passing in the function definition, where the function is not being called. This is correct.

The second example is calling the function, which is incorrect.

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
