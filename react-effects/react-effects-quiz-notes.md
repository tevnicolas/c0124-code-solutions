# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  A component is considered "mounted" to the DOM when it has been rendered and inserted into the DOM tree.

- What is a React Effect?

A React Effect is a side effect in a functional component. Side effects are operations that affect other components or have observable interactions outside the local function. Examples include fetching data from an API, setting up a subscription, or manually changing the DOM. React effects are managed with the useEffect hook.

- When should you use an Effect and when should you not use an Effect?
  You should use an Effect when you need to perform side effects in a functional component, such as API calls, subscriptions, or manually changing the DOM. You should not use an Effect for updating the component's state directly in ways that can be done synchronously in the component's main b

- When do Effects run?
  Effects run after every completed render, but you can choose to fire them only when certain values have changed by using the dependency array.

- What function is used to declare an Effect?
  The useEffect function: It takes a function as its first argument and an optional array of dependencies as its second.

- What are Effect dependencies and how do you declare them?
  Effect dependencies are values from the component's scope (such as props and state) that, when changed, will cause the effect to re-run.
  You declare them in an array as the second argument to useEffect. If the array is empty, the effect will only run once after the initial render.

- Why would you want to clean up from an Effect?
  You might need to clean up from an Effect to prevent memory leaks, remove event listeners, cancel subscriptions, or reset timers to avoid unintended behavior in your component.

- How do you clean up from an Effect?
  You return a function from within the effect's function.

- When does the cleanup function run?
  The cleanup function runs in two scenarios: before the component unmounts and before the effect runs again.

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
