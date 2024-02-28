# npm-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is NPM?
  npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.

npm consists of three distinct components:

the website
the Command Line Interface (CLI)
the registry

- What is a package?
  A package is a reusable piece of software that can be easily installed and managed by a package manager.

- What are some other popular package managers?
  Yarn and PNMP

- How can you create a `package.json` with `npm`?
  npm init --yes

- What is a dependency and how do you add one to a package?
  A dependency is an external piece of software that your project needs to function, and you can add one to a package by running npm install <package-name> which updates the package.json file.

- What happens when you add a dependency to a package with `npm`?
  When you add a dependency to a package with npm, it is downloaded and added to the node_modules directory of your project, and the package name and version are added to the package.json file.

- What is a devDependency and how do you add one to a package?
  A devDependency is a package that is only needed during development, not in production, and you can add one by running npm install <package-name> --save-dev.

- How do you define and run `npm` scripts? Why are these useful?
  You define npm scripts in the scripts section of your package.json file by using npm set-script <key> <"value"> and run them with npm run <script-name>; these scripts are useful for automating repetitive tasks like building, testing, and deployment

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
