export default function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  const first = stack.pop();
  if (stack.peek() === undefined) {
    stack.push(first);
    return undefined;
  }
  const second = stack.pop();
  stack.push(second);
  stack.push(first);
  return second;
}
