# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?

Functions that let you hook into React state. A hook is a type of function that allows a code base to make use of external functionality such as a log in system, or a data store. In React, hooks are used to add state functionality into individual components so that the state can be used to persist data between component calls and schedule component re-renders.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

The function name must start with use followed by an uppercase letter
so user() would not be a valid hook name, but useState and useCallback would be valid
Hooks can only be called by React components and other hooks
All hooks in a component must always be called at the top level of a component, and in the same order
This means you cannot call hooks in nested functions or conditional statements

- What is the purpose of state in React?

The purpose of state in React is to store and manage dynamic information that can change over time. State allows components to maintain and update their output dynamically in response to user actions, network responses, and other events. It enables the creation of interactive and dynamic UIs.

- Why can't we just maintain state in a local variable?

Reactivity: React's re-rendering mechanism is based on state changes. When the state changes, React knows to re-render the component. Local variables don't trigger re-renders when their values change.
Persistence: Local variables are reinitialized on every render, losing their state between renders. React state, on the other hand, is persisted by React across re-renders.
Component Isolation: State managed by React is isolated to each component instance, ensuring that state changes in one component don't inadvertently affect another.

- What two actions happen when you call a `state setter` function?

1. Updates component state with the new value provided to setter function.
2. Schedules an async rerender of the component.

- When does the local `state variable` get updated with the new value?
  After the component re-renders, async.

## Notes

All student notes should be written here.

I imagine writing a function that both declares the state variables and has conditional logic for the setter function could be written in App.tsx and imported into each module, allowing everything to work in sync.

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
