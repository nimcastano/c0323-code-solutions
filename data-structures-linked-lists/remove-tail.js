export default function removeTail(list) {
  while (list.next !== null) {
    const curr = list.next;
    if (curr.next === null) {
      list.next = null;
      return list;
    }
    list = list.next;
  }
}
