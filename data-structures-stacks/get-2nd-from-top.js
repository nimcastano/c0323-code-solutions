export default function get2ndFromTop(stack) {
  let count = 2;
  const items = [];
  while (count > 0) {
    if (stack.peek() === undefined) {
      for (let i = items.length - 1; i >= 0; i--) {
        stack.push(items[i]);
      }
      return undefined;
    }
    items.push(stack.pop());
    count--;
  }
  const target = items[items.length - 1];
  for (let i = items.length - 1; i >= 0; i--) {
    stack.push(items[i]);
  }
  return target;
}
