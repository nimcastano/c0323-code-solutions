export default function swapFront(list) {
  if (list.next !== null) {
    const second = list.next;
    list.next = second.next;
    second.next = list;
    list = second;
  }
  return list;
}
