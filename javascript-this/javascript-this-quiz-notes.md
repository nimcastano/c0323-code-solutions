# javascript-this-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is `this` in JavaScript?
'this' in Javascript refers to the object that it is currently in the closest scope of. This differs in depending on the context of the call.
- What does it mean to say that `this` is an "implicit parameter"?
Implicit means that it does need to be explicitly declared for it be available.
- _When_ is the value of `this` determined in a function; **call time** or **definition time**?
The call time.
- What does `this` refer to in the following code snippet?
    ```js
    const character = {
      firstName: 'Mario',
      greet: function () {
        const message = 'It\'s-a-me, ' + this.firstName + '!';
        console.log(message);
      }
    };
    ```
The 'this' above refers to the character object.
- Given the above `character` object, what is the result of the following code snippet? Why?
    ```js
    character.greet();
    ```
'It's-a-me, Mario!' because 'this' is looking for the firstName property of the object it refers to.
- Given the above `character` object, what is the result of the following code snippet? Why?
    ```js
    const hello = character.greet;
    hello();
    ```
'It's-a-me, Mario!' because 'this' in the greet method refers to the character property.
- How can you tell what the value of `this` will be for a particular function or method **definition**?
You cannot.
- How can you tell what the value of `this` is for a particular function or method **call**?
Look for when the function that includes 'this' is and look to the left of the dot for the object.

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
