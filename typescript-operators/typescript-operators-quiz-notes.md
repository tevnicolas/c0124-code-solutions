# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  Logical AND (&&) evaluates operands from left to right, returning immediately with the value of the first falsy operand it encounters; if all values are truthy, the value of the last operand is returned.

The logical OR expression is evaluated left to right, returning the first truthy expression, or returning the last falsy expression.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  Evaluation stops as soon as the outcome is determined, without needing to evaluate the rest of the expression.
  && and || can be used for different purposes, like && returning immediately with the value of the first falsy operand it encounters; if all values are truthy, the value of the last operand is returned. and for || returning the first truthy expression, or returning the last falsy expression.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  Nullish coalescing operator returns the first expression that is not null or undefined.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  It is like an if else statement, except it can only execute expressions based on a condition—it can't for example use execute statements like 'break' or 'continue' or 'return'. It can also be used for in an assigment which if/else can't.

- What is the `?.` (optional chaining) operator? When would you use it?

It provides a way to simplify accessing values through connected objects when it's possible that a reference or function may not exist.
If the part before ?. is null or undefined, it stops the evaluation and returns undefined.

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  It allows an iterable, such as an array or a string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

arrays, the spread syntax can be used to concatenate arrays, copy arrays, or insert elements into arrays
objects, the spread syntax can be used to copy properties from one object to another or to combine objects

- What data types can be spread into an array? Into an object?
  Any iterable object

- How does spread syntax differ from rest syntax?
  Spread syntax: "Expands" an iterable (array, string, etc.) into individual elements in a function call, array, or an object.
  Rest syntax: Collects multiple elements and "condenses" them into a single array. It is used in function declarations to create an array from an indefinite number of arguments.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
