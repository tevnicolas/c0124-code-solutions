# react-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are modules?
  Modules can be described as a collection of code in an external file which performs a specific task or function. Modules allow the developer to organize their code and separate things like helper functions and external classes from the applications main logic.
  Using modules when building applications makes it easy to divide a program into multiple files and access the code in those files by using import and export statements.

- What is the difference between named and default imports?
  Default exports allow you to give any name you would like to the module which is being imported.
  import HeaderContainer from './Header';
  In contrast to default exports, Named imports maintain the name of the entity being exported from one module and imported into another.
  import { Header } from './Header';
  It is wrapped in {} to destructure the exported function into a new variable of the same name

- What is the difference between named and default exports?
  Named exports make sure that the name of the component being exported is maintained no matter where it is imported. Default exports allow you to give any name you would like to the module which is being imported. Keeping the name consistent across usage in different files is beneficial from a code clarity standpoint. Named exports are also useful because it makes it easier for the TypeScript to provide assistance as you type. For example, with named exports you can quickly find all references to your exported function. With default exports that doesn't always work. Unlike default exports, a module can have multiple named exports since they all have their own unique names.

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
