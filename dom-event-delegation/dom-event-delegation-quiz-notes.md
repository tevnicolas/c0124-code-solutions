# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?

- Why is it possible to listen for events on one element that actually happen its descendent elements?
  If new elements are added to the DOM that should trigger the same event, you don't need to add new event listeners for them. The event listener on the parent element will handle events from the new elements as well.

- What DOM element property tells you what type of element it is?
  .tagName

- What does the `element.closest()` method take as its argument and what does it return?
  Parameters: selectors
  A string of valid CSS selector to match the Element and its ancestors against.

Return value
The closest ancestor Element or itself, which matches the selectors. If there are no such element, null.

- How can you remove an element from the DOM?
  Using the .remove() method.

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  By adding an event listener to the parent element and utilizing capturing and bubbling.

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
