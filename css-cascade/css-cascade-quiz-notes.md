# css-cascade-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the four components of "the Cascade".
Source order, inheritance, specificity and !important.
- What does the term "source order" mean with respect to CSS?
If an element is referenced more than once with the same level of specificity in CSS, the later style will take precedence.
- How is it possible for the styles of an element to be applied to its children as well without an additional CSS rule?
Inheritance. If it is not assigned a value, it will the value from its parent.
- List the three selector types in order of increasing specificity.
Type, class and ID.
- Why is using `!important` considered bad practice?
Because if we get too comfortable with using it and we use it more than once for an element, it reverts back to the specificity. It also makes style sheets more difficult to maintain and understand.

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
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
  width:100%
}
```
