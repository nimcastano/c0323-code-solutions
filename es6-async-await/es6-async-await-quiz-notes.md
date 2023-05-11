# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  Aysnc makes a function an async function. Await returns a promise and makes the code wait there
  until the promise is settled.
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  Then and catch will continue to execute the rest of the code and wont execute the callback until the promise settles.
  Async and await will pause the function until the promise settles.
- When do you use `async`?
  Before a function definition. When you use await in the function. You use await in an async function.
  You cannot use await if the function is not an async function.
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  If you want a promise to settle. You do not use await on synchronous functions.
- How do you handle errors with `await`?
  You use try and catch.
- What do `try`, `catch` and `throw` do? When do you use them?
  Try and catch handle errors when using the await keyword. Try is before the await. Catch is after the await.
  Throw creates an error and stops execution. It finds the next closest catch and executes that.
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  It will return the Promise object. Your test will complete before the promise is returned.
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  Async and await because it's easier to read, write and debug.

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
