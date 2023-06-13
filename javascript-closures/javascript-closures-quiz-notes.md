# javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- In JavaScript, when is scope determined?
  It is determined once the variable is declared.
- What allows JavaScript functions to "remember" variables from their surroundings?
  The closure.
- What values does a closure contain?
  It contains everything within the scope of that closure.
- When is a closure created?
  It is created when a function is declared.
- How can you tell if a function will be created as a closure?
  Every function has a closure. But the concept is really only relevant if
  the function returns another function.
- In React, what is one important case where you need to know if a closure was created?
  When using hooks. For example, using useEffect requires that we are using the correct
  dependencies so that the page re-renders appropriately with the correct value.

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
