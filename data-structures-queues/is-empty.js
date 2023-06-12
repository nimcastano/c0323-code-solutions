export default function isEmpty(queue) {
  if (queue.peek() === undefined) {
    return true;
  }
  return false;
}
