# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  Hooks allow you to use state and other React features without writing a class.
  They are only available while React is rendering.
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  Hooks can only be called inside React function components.
  Hooks can only be called at the top level of a component.
  Hooks cannot be conditional.
- What is the purpose of state in React?
  It is a kind-of component-specific memory. It allows components to remember certain things. such as
  indices.
- Why can't we just maintain state in a local variable?
  Local variables do not maintain their value between renders. It will start it all over.
  Second, changes to local variables does not tell React to rerender the page.
- What two actions happen when you call a `state setter` function?
  It updates the variable and triggers React to rerender the component.
- When does the local `state variable` get updated with the new value?
  Once the event occurs, it calls the state setter function, effectively updating the
  state variable.

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
