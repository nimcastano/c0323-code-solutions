# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?
No. The element has to go through two more steps to be added to the DOM.
- How do you add an element as a child to another element?
The appendChild() method.
- What do you pass as the arguments to the `element.setAttribute()` method?
The name of the attribute and the value of said attribute.
- What steps do you need to take in order to insert a new element into the page?
createElement(), createTextNode() and appendChild().
- What is the `textContent` property of an element object for?
It returns the text wrapped inside that element.
- Name two ways to set the `class` attribute of a DOM element.
You can use the setAttribute() and put 'class' as your first argument or use the className property in combination with the assignment operator.
- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
We can put it in a loop to much more efficiently create elements on a webpage.
It is much easier to not get confused over making sure the divs are organized correctly. Less potential for mistakes once we make sure the function works correctly.

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
