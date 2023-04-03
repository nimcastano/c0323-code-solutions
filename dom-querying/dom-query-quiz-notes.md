# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
In order to check if our script is working as we expect it to.
- What is a "model"?
A way to visualize something. In this case, it is our way to visualize the webpage.
- Which "document" is being referred to in the phrase Document Object Model?
The entire webpage.
- What is the word "object" referring to in the phrase Document Object Model?
Each node in a DOMA is an object with properties and values.
- What is a DOM Tree?
A DOM tree depicts the body of an HTML page as a collection of nodes with branches for attributes and text. Gives the browser a picture of how each element is related to each other.
- Give two examples of `document` methods that retrieve a single element from the DOM.
getElementById() and querySelector().
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
querySelectorAll()
- Why might you want to assign the return value of a DOM query to a variable?
It allows us to save that value and have it more easily accessible for future use. The DOM tree will not have to be used to find it later.
- What `console` method allows you to inspect the properties of a DOM element object?
console.dir()
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
This guarantees that the elements inside the HTML document have already established their place in the DOM tree before any javascript is used.
- What does `document.querySelector()` take as its argument and what does it return?
Its parameter is a CSS selector and returns the first element to match it.
- What does `document.querySelectorAll()` take as its argument and what does it return?
Its parameter is a CSS selector and returns all elements that match it in a nodelist.

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
