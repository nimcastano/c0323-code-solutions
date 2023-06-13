export default function removeNext(list) {
  if (list.next !== null) {
    const second = list.next;
    const third = second.next;
    list.next = third;
  }
}
