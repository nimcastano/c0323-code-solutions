# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
We log things to the console to make sure that the script is working as we want it to.
- What is the purpose of events and event handling?
It is to update the content in front of the visitor of the webpage, for example, if they click a link and want to go there.
- Are all possible parameters required to use a JavaScript method or function?
No. It will still run.
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
addEventListener()
- What is a callback function?
A callback function is a function passed into another function as an argument.
- What object is passed into an event listener callback when the event fires?
The DOM element we are targeting.
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
It returns the object or element that the event targeted.
- What is the difference between these two snippets of code?
    ```js
    element.addEventListener('click', handleClick)
    ```
    ```js
    element.addEventListener('click', handleClick())
    ```
The former will wait for the event to be triggered by the user. The latter is a function call and therefore immediately runs the function without user input.
The latter also runs the function without any arguments.

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
