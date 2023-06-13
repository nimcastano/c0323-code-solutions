export default function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  let removedVal = queue.dequeue();
  while (index > 0) {
    queue.enqueue(removedVal);
    removedVal = queue.dequeue();
    index--;
  }
  return removedVal;
}
