# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  To ensure variables are correct, for debugging, and interacting with elements and nodes through Javascript.

- What is a "model"?
  Something visibly represented. In the case of DOM, it represents all page content as objects that can be modified.

- Which "document" is being referred to in the phrase Document Object Model?
  The document object is the main “entry point” to the html page being referenced.

- What is the word "object" referring to in the phrase Document Object Model?
  All page content is being represented as _objects_ that can be modified.

- What is a DOM Tree?
  The DOM represents HTML as a tree structure of tags

- Give two examples of `document` methods that retrieve a single element from the DOM.
  document.querySelector elem.closest()

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  document.querySelectorAll()

- Why might you want to assign the return value of a DOM query to a variable?
  Each time we query the DOM for an element reference, it requires the interface to search through all of the HTML so that it can find the elements we are looking for.
  Because of this, it is generally a best practice to store DOM element references in a variable. Once the reference has been saved in a variable, accessing the element again does not require another search.

- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  The browser needs to parse all of the elements in the HTML page before the JavaScript code can access them.

- What does `document.querySelector()` take as its argument and what does it return?
  Argument is a css selector. It returns the first element for the given CSS selector. ie elem.querySelector(css)

- What does `document.querySelectorAll()` take as its argument and what does it return?
  Argument is a css selector. It returns all elements inside elem matching the given CSS selector ie elem.querySelectorAll(css)

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
