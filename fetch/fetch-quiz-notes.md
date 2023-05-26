# fetch-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does `fetch()` return?
  Fetch returns a promise that resolves with a response object.
- What is the default request method used by `fetch()`?
  The GET method.
- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?
  We need to add the second parameter, an object, with a property of method having the value of another method.
- How does `fetch` report errors?
  It provides an ok flag for us to see if the status code is successful. But, it does not throw an error
  so we need to check if the response is ok even if the promise is resolved.

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
