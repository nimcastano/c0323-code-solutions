# data-structures-stacks-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does the acronym LIFO mean?
  LIFO stands for last in, first out.
- What methods are available on a Stack data structure?
  push(value), pop(), peek()
- What must you do to access the value at an arbitrary point in a stack (not just the "top")?
  Start with setting a variable to the index we want.
  Then we must create a helper function that pops the top and grabs it.
  This can be done with a while loop that checks if that arbitrary point has been hit by decrementing the variable we declared. Once it is hit, we need to save it to variable. Then we need to push the values back onto the stack so as to not change it.

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
