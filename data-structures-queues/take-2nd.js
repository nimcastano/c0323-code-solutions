export default function take2nd(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  const first = queue.dequeue();
  if (queue.peek() === undefined) {
    return first;
  }
  queue.enqueue(first);
  return queue.dequeue();
}
