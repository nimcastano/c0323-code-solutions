# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?
  World's largest software registry.
- What is a package?
  A file or directory that is described by a package.json file.
- What are some other popular package managers?
  Docker, Maven, RubyGems, Conda, Nuget, Yarn, PNPM.
- How can you create a `package.json` with `npm`?
  You type this in the command line: "npm init --yes"
- What is a dependency and how do you add one to a package?
  It states what other modules need to be running in order for the current module to work.
- What happens when you add a dependency to a package with `npm`?
  They are added to the devDependencies object in your package.json.
- What is a devDependency and how do you add one to a package?
  A devDependency are the packages required to run the current module.
  You use the npm install --save-dev package-name to install.
- How do you define and run `npm` scripts? Why are these useful?
  As long as it is in the scripts object in the package,
  all you have to do is 'npm run property-name' of the script you want to run
  in the terminal.

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
