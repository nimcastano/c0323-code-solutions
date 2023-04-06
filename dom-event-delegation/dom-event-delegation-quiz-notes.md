# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
The event.target is the object that the event was triggered by.
- Why is it possible to listen for events on one element that actually happen its descendent elements?
Because of the event flow step called bubbling.
- What DOM element property tells you what type of element it is?
The tagName property.
- What does the `element.closest()` method take as its argument and what does it return?
It takes a CSS selector as its argument and returns the first node that matches that selector up the DOM tree starting from its position.
- How can you remove an element from the DOM?
The remove method.
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
Add an event listener to its parent element.

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
