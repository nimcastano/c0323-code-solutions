# data-structures-queues-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does the acronym FIFO mean?
  First-in-first-out.
- What methods are available on a Queue data structure?
  enqueue(value) adds a value to the back of the queue. dequeue() removes a value from the front and returns it.
- What must you do to access the value at an arbitrary point in a queue (not just the "front")?
  You need to create a while loop that checks if the point has been hit and removes an
  element until it has been hit. After accessing the value at that point, we need to
  return the queue to its original form so we need to place values back into their
  place by using another loop.

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
