# express-hello-world-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Express middleware?
  Middleware functions are functions that have access to the request object (req), the response object (res),
  and the next middleware function in the application’s request-response cycle.
- What is Express middleware useful for?
  Because it gives us access to the http request and response objects, they are useful for either terminating
  the HTTP request or forward it for further processing to another function.
- How do you mount a middleware with an Express application?
  By using the use method.
- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  Request and response objects.

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
