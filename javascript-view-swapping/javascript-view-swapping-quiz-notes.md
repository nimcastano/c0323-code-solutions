# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
The event target is the object/element that the event is triggered by.
- What is the affect of setting an element to `display: none`?
It hides the content from the user and makes the content seem like it was never there.
- What does the `element.matches()` method take as an argument and what does it return?
The parameter is a CSS selector and the return is a boolean depending on if the element matches the parameter.
- How can you retrieve the value of an element's attribute?
The getAttribute() method.
- At what steps of the solution would it be helpful to log things to the console?
Every step of the process would be helpful but for the solution, we just want to see if the changes are taking effect as we want them to in the function, so the end of the function.
- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?
You would need one more event listener to individually turn those divs on and off.
- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?
You would need to hide each one individually, which means more lines of unneccessary code.
## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:

```javascript
const data = "Howdy";
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
