# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  function name, an assignment operator, pair of parentheses that takes the parameters, the arrow for the function and the actual code block.
- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  If it is not wrapped in curly braces, you can only write one expression in the body. You do not need a return statement. If it is, then you can write statements and multiple lines of code.
  However, you do need a return statement.
- When using _concise body syntax_, how do you return an object literal?
  You have to wrap the object in parentheses.
- In the expression
  `js
  foo(() => 42);
  `
  - Identify the arrow function
    The arrow function is what is inside the parentheses. It is the argument being passed into the function foo.
  - How many arguments does the arrow function take?
    It does not take any.
  - What value does it return?
    It returns the number 42.
  - How many arguments are passed to the function `foo`?
    Only one.
  - What type of argument is passed to the function `foo`?
    An anonymous arrow function.
- In the expression
  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```
  - Identify the arrow function
    The arrow function is what's inside the parentheses. It is the argument being passed into the function bar.
  - How many arguments does the arrow function take?
    The arrow function takes one argument.
  - What value does it return?
    It returns undefined.
  - How many arguments are passed to the function `bar`?
    It is only taking one.
  - What type of argument is passed to the function `bar`?
    An anonymous arrow function.
  - When does the arrow function's code get executed?
    When it gets called inside the function bar's code block, if it gets called inside the function bar's code block.
- How does the value of `this` differ between standard functions and arrow functions?
  The this in a standard function refers to the calling object. The this in an arrow function depends on its lexical scope.

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
