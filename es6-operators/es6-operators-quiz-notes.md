# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  It can be used to find out which expressions are truthy or falsy if one or both are non-boolean.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  Short-circuit evaluation means it stops it computer from parsing through all of the code.
  In the case of the logical &&, if the first expression is falsy, it will short circuit and return that one.
  In the case of the logical ||, if the first expression is truthy, it will short circuit and return that one.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its
  left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
  It differs because it is looking for null and undefined, rather than any falsy value, in order to return
  the right hand side of the expression.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  It checks to see if something is truthy or falsy and returns a corresponding value. It differs because it
  has to return something, rather than simply executing an operation like an if/else statement can.

- What is the `?.` (optional chaining) operator? When would you use it?
  It checks to see if a property of an object is null or undefined and if it is, it returns undefined instead
  of an error. If it does exist, it would just return the value of that property.
  I would use it to check if a property exists in a sizable data structure.

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  The spread syntax is to spread out the elements of an array, object or string and separates them outside of
  the data type they were originally in.
  You use it with arrays to concatenate or mutate them. Also if you are using a
  function that requires arguments to not be inside an array.
  With objects, you can use it to combine or clone them.

- What data types can be spread into an array? Into an object?
  Strings and numbers can be spread into an array. Any data type can be spread into an object.

- How does spread syntax differ from rest syntax?
  It does not. The syntax is exactly the same. But functionally, they are different.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
