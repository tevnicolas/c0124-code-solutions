# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page?
  No, it just creates the instance of an element which can then be stored and then appended to the page.

- How do you add an element as a child to another element?
  The appendChild() method of the Node interface adds a node to the end of the list of children of a specified parent node.

- What do you pass as the arguments to the `element.setAttribute()` method?
  name
  A string specifying the name of the attribute whose value is to be set
  value
  A string containing the value to assign to the attribute.

- What steps do you need to take in order to insert a new element into the page?

1. create the element and assign it to a variable ie const $element = document.createElement('h1');
2. Append the variable to the document body ie document.body.appendChild($element);

- What is the `textContent` property of an element object for?
  It's for getting all the text associated with an element and its children. It can also be used to assign text to the element.

- Name two ways to set the `class` attribute of a DOM element.
  By using element.className = "class"; or
  element.classList.add = "class";

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  The code is modular/reusable, and you can add the additional dimension of parameters.

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
