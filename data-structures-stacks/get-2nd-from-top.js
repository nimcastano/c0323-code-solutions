export default function get2ndFromTop(stack) {
  let count = 1;
  if (stack.peek() === undefined) {
    return undefined;
  }
  while (stack.peek() !== undefined) {
    if (count === 0) {
      return stack.pop();
    }
    stack.pop();
    count--;
  }
}
