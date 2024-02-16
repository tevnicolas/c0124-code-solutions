# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  The event.target is the element that is interacted with in whatever way an event listener function is specifying.

- What is the affect of setting an element to `display: none`?
  It is hidden from view.

- What does the `element.matches()` method take as an argument and what does it return?
  It takes a string selector as an argument to test an element against.
  It returns a boolean if the element matches the selector.

- How can you retrieve the value of an element's attribute?
  You can use the getAttribute() method.

- At what steps of the solution would it be helpful to log things to the console?
  At any step. Especially if there's nesting if statements, or loops, or just generally if there's complicated logic.

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?
  You could code a solution where another event listener is added to the extra tab; it would have to be awkwardly located outside of the parent element on which the current add event listener is on.

- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?
  You could use individual event listeners to trigger different callback functions which hide or show content on the page..

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
