# css-positioning-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the **default** value for the `position` property of HTML elements?
  static

- How does setting `position: relative` on an element affect document flow?
  Does not affect document flow.

- How does setting `position: relative` on an element affect where it appears on the page?
  You can affect its final position, including making it overlap other elements on the page.

- How does setting `position: absolute` on an element affect document flow?
  It affects it significantly, by removing it from the normal document flow, meaning it no longer affects the positioning of other elements in the document.

- How does setting `position: absolute` on an element affect where it appears on the page?
  It appears relative to its nearest positioned ancestor, or if there isn't one, the initial containing block.

- How do you constrain an absolutely positioned element to a containing block?
  By setting the containing block's position to something other than static.

- What are the four box offset properties?
  top, bottom, left, right

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
