# html-block-and-inline-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How do block-level elements affect the document flow?
  In a block layout, boxes are laid out one after the other, vertically, beginning at the top of a containing block. Each box's left outer edge touches the left edge of the containing block.
  A block-level element always starts on a new line. In horizontal writing modes, like English or Arabic, it occupies the entire horizontal space of its parent element (container) and vertical space equal to the height of its contents, thereby creating a "block".

- How do inline elements affect the document flow?
  In inline layout, a mixed stream of text, replaced elements, and other inline boxes are laid out by fragmenting them into a stack of line boxes. Within each line box, inline-level boxes are aligned to each other vertically or horizontally, depending on the writing mode. Typically, they are aligned by the baselines of their text.

- What are the default width and height of a block-level element?
  By default, a block-level element's width spans 100% of its parent container's width, while its height automatically adjusts to fit its content.

- What are the default width and height of an inline element?
  The default width and height of an inline element are determined by its content, with no set dimensions unless altered using CSS

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
