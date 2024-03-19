# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  The async and await keywords are used to write asynchronous code in a more synchronous-looking manner. async is used to declare a function as asynchronous, and await is used to wait for a Promise to resolve.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  async and await provide a cleaner, more readable syntax for handling asynchronous operations compared to Promise.then and Promise.catch by allowing asynchronous code to look more like traditional synchronous code.

- When do you use `async`?
  You use async when defining a function that will perform asynchronous operations, ensuring it returns a Promise.

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  You use await within an async function to pause execution until a Promise resolves; you do not use await in synchronous functions because it has no effect and unnecessarily complicates the code.

- How do you handle errors with `await`?
  To handle errors with await, you wrap the await statement in a try block and catch any rejected Promises with a catch block.

- What do `try`, `catch` and `throw` do? When do you use them?
  Try is used to wrap code that may throw an error, catch is used to handle the error, and throw is used to raise an error. They are used together to implement error handling in synchronous and asynchronous code.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  If you forget to use await on a Promise, the code execution will not pause, and the Promise will execute asynchronously. If the Promise is rejected, the rejection might go unhandled unless it's explicitly caught elsewhere.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  Async and await seem the most readable to me—it makes it more clear what data is being passed where through the declaration of variables.

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
